import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        await mongoose.connect("mongodb+srv://swarnava:Rubi1972@cluster0.vz07phe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}