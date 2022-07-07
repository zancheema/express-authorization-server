require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/authRouter");

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
// routes
app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Sever listening on port ${port}...`);
});