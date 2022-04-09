import mongoose, { Schema, model, Model } from "mongoose"
import casual from "casual"
import { MainSector, MainSectorModel } from "./interface"

const mainSectorSchema: Schema<MainSector, Model<MainSectorModel>> = new Schema({
    label: {
        type: String,
        required: true
    },
    options: [{
        type: Schema.Types.ObjectId,
        ref: "SubSector",
    }]
}, {timestamps: true})

export default mongoose.models.MainSector || mongoose.model("MainSector", mainSectorSchema)