const User = require("../model/userModel");

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("please provide all fields");
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404);
      throw new Error("no user with that email");
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      res.status(400);
      throw new Error("invalid credentials please double check");
    }

    const token = await user.getSignedToken();
    if (!token) {
      res.status(500);
      throw new Error("you should never see this");
    }

    res.status(200).json({
      success: true,
      message: "successfully logged in",
      token,
    });
  } catch (err) {
    next(err);
  }
};

const postRegister = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("please provide all fields");
    }

    const dupe = await User.findOne({ email });
    if (dupe) {
      res.status(400);
      throw new Error("there is already an account registered");
    }

    const user = await User.create({
      email,
      password,
      role: "guest",
    });
    if (!user) {
      res.status(500);
      throw new Error("well this is embarassing");
    }

    const token = await user.getSignedToken();
    if (!token) {
      res.status(500);
      throw new Error("you should never see this");
    }

    res.status(200).json({
      success: true,
      message: "successfully registered account",
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { postLogin, postRegister };
