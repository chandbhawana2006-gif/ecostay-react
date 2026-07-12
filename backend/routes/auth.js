const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");

const User = require("../models/User");

const router = express.Router();

// Rate Limiter
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:3,
    message: "Too many attempts. Please try again later.",
});

// Register
router.post(
    "/register",
    authLimiter,
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Enter a valid email"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters"),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, password } = req.body;

            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
            });

            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);

// Login
router.post(
    "/login",
    authLimiter,
    [
        body("email")
            .isEmail()
            .withMessage("Enter a valid email"),

        body("password")
            .notEmpty()
            .withMessage("Password is required"),
    ],
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        try {
            const { email, password } = req.body;

            console.log("Login request:", req.body);

            const user = await User.findOne({ email });

            console.log("User found:", user);

            if (!user) {
                return res.status(400).json({
                    message: "Invalid credentials"
                });
            }

            const isMatch = await bcrypt.compare(
                password,
                user.password
            );

            console.log("Password match:", isMatch);

            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
            console.log("TOKEN GENERATED:", token);
            console.log("Sending response:", {
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
            res.json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });

        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
);
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/login",
    }),
    (req, res) => {
        const token = jwt.sign(
            { id: req.user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.redirect(
            `http://localhost:5173/login-success?token=${token}`
        );
    }
);
module.exports = router;