const jwt = require("jsonwebtoken");

const checkTokensetUser = async (req, res, next) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      res.status(400);
      throw new Error("you are not authorized to view this page");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(400);
      throw new Error("you are not authorized to view this page");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(400);
      throw new Error("you are not authorized to view this content");
    }
    req.user = decoded;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = checkTokensetUser;
