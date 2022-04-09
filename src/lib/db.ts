import mongoose from "mongoose"

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(connection => console.log("connected to db"))
    } catch (error) {
        console.log(`Failed to connect to db ${error}`)
    }
}

export default connectDB