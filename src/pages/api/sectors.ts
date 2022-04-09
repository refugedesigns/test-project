import mongoose from "mongoose";
import connectDB from "../../lib/db";
import Field from "../../models/field";
import MainSector from "../../models/main-sector";
import SubSector from "../../models/sub-sector";


export default async (req, res) => {
  
  try {
    await connectDB();

    const sectors = await MainSector.find(
      {},
      "-createdAt -updatedAt -__v -_id"
    ).populate({
      path: "options",
      model: SubSector,
      select: "-createdAt -updatedAt -__v -_id",
      populate: {
        path: "options",
        model: Field,
        select: "-createdAt -updatedAt -__v -_id",
      },
    });

    res.status(200).json(sectors);
    await mongoose.disconnect();
    return;
  } catch (error) {
    res.status(500).json({ message: "Database connection error" });
    await mongoose.disconnect();
    return;
  }

   
};
