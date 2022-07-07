const { Router } = require("express");
const User = require("../db/model/User");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../jwt/util");

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
    try {
        const { email, password, fullname } = req.body;
        const encPassword = await bcrypt.hash(password, 10);

        const savedUser = await User.create({
            email: email,
            password: encPassword,
            fullname: fullname,
        });
        res.status(201);
        res.json(savedUser);
    } catch (err) {
        res.sendStatus(403);
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        const token = generateAccessToken(user.id + "");
        res.json({ accessToken: token });
    } catch (err) {
        res.status(401);
        res.send(err.message);
    }
});

module.exports = authRouter;