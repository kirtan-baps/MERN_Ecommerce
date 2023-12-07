import mongoose from 'mongoose';
import colors from "colors";


const connectDb = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in mongoDb ${error}`.america);
    }
}

export default connectDb;
