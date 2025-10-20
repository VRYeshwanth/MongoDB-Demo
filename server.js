import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import UserRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/users", UserRoutes);

app.listen(process.env.PORT, () => {
    console.log(`✅ Server running on PORT ${process.env.PORT}`);
})