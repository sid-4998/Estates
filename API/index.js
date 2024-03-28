import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
process.loadEnvFile(".env");
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});
const app = express();

app.use('/API/user', userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});