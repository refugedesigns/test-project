import mongoose from "mongoose";
import { check, validationResult } from "express-validator";
import casual from "casual";
import cookie from "cookie";
import initMiddleware from "../../lib/init-middleware";
import validateMiddleware from "../../lib/validate-middleware";
import connectDB from "../../lib/db";
import User from "../../models/user";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("name").isString().notEmpty(),
      check("sector").isObject().notEmpty(),
      check("checked")
        .isBoolean()
        .custom((_, { req }) => req.body.checked === true),
    ],
    validationResult
  )
);

export default async (req, res) => {
  if (req.method === "POST") {
    await validateBody(req, res);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    if (!req.cookies.token) {
      const token = casual.random.toString();
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 604800 * 1000,
          sameSite: "strict",
          path: "/",
        })
      );
    }

    const { name, sector, checked } = req.body;

    
    try {
      await connectDB();
      let user;
      const existingUser = await User.find({ token: req.cookies.token });
      if (existingUser.length > 0) {
        user = await User.findOneAndUpdate(
          { token: req.cookies.token },
          { $set: { name: name, sector: sector.value } },
          { new: true }
        );
      } else {
        user = await User.create({
          name,
          sector: sector.value,
          checked: true,
          token: req.cookies.token,
        });
      }

      res.status(201).json({
        success: {
          user :{
            name: user.name,
            checked: user.checked,
            sector: {
              value: user.sector
            }
          },
          message: existingUser.length > 0 ? "You updated your info!" : "New info created",
        },
      });
      await mongoose.disconnect()
      return
    } catch (error) {
      res.status(500).json({ message: "Database connection error" });
      await mongoose.disconnect();
      return
    }
  }
};
