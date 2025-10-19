import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
})