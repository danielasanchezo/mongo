import mongoose from 'mongoose';
export const connectDB = async()=>{
try {
    await mongoose.connect(MONGODB_URI)
console.log("base de datos conectada.");
} catch (error) {
    console.log(error);
}
    
};