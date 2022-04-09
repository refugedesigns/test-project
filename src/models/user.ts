import mongoose, { Schema, model, Model } from "mongoose";
import { User, UserModel } from "./interface";

const userSchema: Schema<User, Model<UserModel>> = new Schema(
  {
    name: {
        type: String,
        require: true
    },
    sector: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
    checked: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
