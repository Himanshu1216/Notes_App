import express from "express";
import notes from "./data/notes.js";
import cors from 'cors';
import connectDB from "./config/db.js";

const app = express();
connectDB();

app.use(cors());

app.get('/api/notes', (req, res) => {
    res.send(notes);
})

app.get('/', (req, res) => {
    res.send("API is running..");
})

app.listen(3001, () => {
    console.log(`Server listening on port`);
})