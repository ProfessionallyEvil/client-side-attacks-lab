const db = "../config/db";

module.exports = (req, res, next) => {
  if (!req.session) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(401)
      .send(
        JSON.stringify({ status: 401, message: "Authentication required." })
      );
  } else {
    next();
  }
};
