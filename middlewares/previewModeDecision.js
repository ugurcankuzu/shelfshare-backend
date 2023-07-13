const jwt = require("jsonwebtoken");
const PreviewMode = require("../previewMode");

function previewModeDecision(req, res, next) {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err) {
        req.previewMode = PreviewMode.GUEST_MODE;
      } else {
        req.previewMode = PreviewMode.OWNER_MODE;
      }
      next();
    });
  } else {
    req.previewMode = PreviewMode.GUEST_MODE;
    next();
  }
}

module.exports = previewModeDecision;
