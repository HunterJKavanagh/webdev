import express from "express";
import db from "./config/database.js";
import movieRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("Datebase connected");
} catch (error) {
    console.log("Connection error: ", error);
}

app.use(cors());
app.use(express());
app.use('/midwest-states', movieRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));