import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.use(express.json());
app.use('/API/user', userRouter);
app.use('/API/auth', authRouter);
app.use((err, req, res, next) => { // This is a middleware
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});