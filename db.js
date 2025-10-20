import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected : ${connection.connection.port}`);
    }
    catch(err) {
        console.log(`Error connecting : ${err}`);
        process.exit(1);
    }
};

export default connectDb;