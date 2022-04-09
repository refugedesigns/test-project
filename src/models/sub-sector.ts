import mongoose, { Schema, model, Model } from "mongoose";
import { SubSector, SubSectorModel } from "./interface";

const subSectorSchema: Schema<SubSector, Model<SubSectorModel>> = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true
    },
    options: [
      {
        type: Schema.Types.ObjectId,
        ref: "Field",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.SubSector ||
  mongoose.model("SubSector", subSectorSchema);
