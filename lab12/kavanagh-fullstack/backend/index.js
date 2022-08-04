import express from "express";
import db from "./config/database.js";
import movieRoutes from "./routes/index.js";
import cors from "cors";
import bodyparser from 'body-parser';

const app = express();

try {
    await db.authenticate();
    console.log("Datebase connected");
} catch (error) {
    console.log("Connection error: ", error);
}

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.use(cors());
app.use(express());
app.use('/midwest-states', movieRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));