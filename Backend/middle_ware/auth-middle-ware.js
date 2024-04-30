const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;

const authMiddleware = async (req, res, next) => {
  const token = req.header("x-access-token");
  console.log("token :", token);

  if (!token) {
    return res.status(200).json({ message: "Token not provided" });
  }

  try {
    const verifyToken = await jwt.verify(token, "Hassan_Nadeem");
    console.log("verifyToken :", verifyToken);

    req.user = verifyToken;

    const userData = await User.findOne({
      where: { email: verifyToken.email },
    });
    console.log("userData :", userData);

    // if (userData) {
    //     req.user = userData;
    //     req.token = token;
    //     req.userId = userData.id;
    // } else {
    //     return res.status(200).json({ message: "User not found" });
    // }
    next();
  } catch (error) {
    console.log("verifyToken error:", error);
    return res.status(200).json({ message: "Unauthorized token" });
  }
};

const adminMiddleWare = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.userId);
    console.log("admin middleware:", user);
    if (user.role !== "admin") {
      return res.status(401).json({ message: "Unauthorized Access" });
    } else {
      next();
    }
  } catch (error) {
    console.log("error in admin middleware", error);
    return res.status(500).json({ message: "Admin middleware error", error });
  }
};

module.exports = { authMiddleware, adminMiddleWare };
