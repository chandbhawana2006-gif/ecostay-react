require("dotenv").config();
const aiRoutes = require("./routes/ai");
console.log("THIS IS MY SERVER");
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const passport = require("./passport");
const Stay = require("./models/Stay");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });

// GET all stays
app.get("/api/stays", async (req, res) => {
    try {
        const stays = await Stay.find();
        res.status(200).json(stays);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// SEARCH stay
app.get("/api/stays/search/:name", async (req, res) => {
    try {
        const result = await Stay.find({
            name: {
                $regex: req.params.name,
                $options: "i",
            },
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET stay by ID
app.get("/api/stays/:id", async (req, res) => {
    try {
        const stay = await Stay.findById(req.params.id);

        if (!stay) {
            return res.status(404).json({
                message: "Stay not found",
            });
        }

        res.status(200).json(stay);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create stay
app.post("/api/stays", async (req, res) => {
    try {
        const stay = new Stay({
            name: req.body.name,
            location: req.body.location,
            price: req.body.price,
        });

        const savedStay = await stay.save();

        res.status(201).json(savedStay);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT update stay
app.put("/api/stays/:id", async (req, res) => {
    try {
        const { name, location, price } = req.body;

        const updatedStay = await Stay.findByIdAndUpdate(
            req.params.id,
            { name, location, price },
            { new: true, runValidators: true }
        );

        if (!updatedStay) {
            return res.status(404).json({ message: "Stay not found" });
        }

        res.status(200).json(updatedStay);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE stay
app.delete("/api/stays/:id", async (req, res) => {
    try {
        const deletedStay = await Stay.findByIdAndDelete(req.params.id);

        if (!deletedStay) {
            return res.status(404).json({
                message: "Stay not found",
            });
        }

        res.status(200).json({
            message: "Stay deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Home route
app.get("/", (req, res) => {
    res.send("EcoStay Backend Running");
});



app.get("/api/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome! This is a protected route.",
        user: req.user,
    });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal Server Error",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
