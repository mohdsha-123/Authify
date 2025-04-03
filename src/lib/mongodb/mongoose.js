import mongoose from "mongoose";

let initiallized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initiallized) {
        console.log('Database is already connected'); 
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Authify",
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("MongoDB Connected");
        initiallized = true;
    } catch (error) {
        console.log("MongoDB connection error: ", error);
    }
}