import mongoose from 'mongoose'; 
import dotenv from 'dotenv';

dotenv.config();
// ${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}

const DBconeection = async () => {
    const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rjs30qn.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log("connected successfully");
    } catch (error) {
        console.log("error with connecting database", error);
    }
}

export default DBconeection;