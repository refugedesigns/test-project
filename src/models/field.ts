import mongoose,{ Schema, model, Model } from "mongoose";
import { Field, FieldModel } from "./interface";

const fieldSchema: Schema<Field, Model<FieldModel>> = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);



export default mongoose.models.Field ||
  mongoose.model("Field", fieldSchema);
