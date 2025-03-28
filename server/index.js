import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);

app.get("/", (_req, res) => {
    res.send("Server is running!"); 
  });

//const CONNECTION_URL = 'mongodb+srv://Javascriptmastery:Javascriptmastery123@cluster0.x5rbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ';   
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

  