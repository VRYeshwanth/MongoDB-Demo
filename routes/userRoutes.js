import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
    }
    catch(err) {
        res.status(500).json({"Error": err.message});
    }
})

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const user = await User.create(data);
        res.status(201).json({"Success": "User Successfully Added", user});
    }
    catch(err) {
        res.status(400).json({"Error": err.message});
    }
})

export default router;