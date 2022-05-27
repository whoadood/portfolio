const adminCheck = (req, res, next) => {
  if (req.user.role === process.env.USER_ROLE) {
    next();
  } else {
    next(new Error("cant let you do that"));
  }
};

module.exports = adminCheck;
