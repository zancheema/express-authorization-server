const jwt = require("jsonwebtoken");

function generateAccessToken(id) {
    const secret = process.env.SECRET;
    return jwt.sign({}, secret, {
        subject: id,
        expiresIn: "30m"
    });
}

module.exports = {
    generateAccessToken: generateAccessToken
}