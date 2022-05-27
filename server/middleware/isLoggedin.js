const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    res.status(404);
    next(new Error("you must login to view this page"));
  }

  next();
};

module.exports = isLoggedIn;
