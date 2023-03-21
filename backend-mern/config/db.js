import mongoose from "mongoose";
import dotenv from "dotenv";

const connectarDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `${connection.connection.host}:${connection.connect.port}`;
        console.log("conectado a mongoose : ", url);
    } catch (error) {
        console.log(`error ${error.message}`);
        process.exit(1);
    }
};

export default connectarDB;
