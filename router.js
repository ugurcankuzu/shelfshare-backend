const express = require("express");
const register = require("./Routes/register");
const checkEmailExists = require("./middlewares/checkEmailExists");
const login = require("./Routes/login");
const jwtVerification = require("./middlewares/jwtVerification");
const getUserInfo = require("./Routes/getUserInfo");
const getBooksInShelf = require("./Routes/getBooksInShelf");
const createShelf = require("./Routes/createShelf");
const getShelf = require("./Routes/getShelf");
const previewModeDecision = require("./middlewares/previewModeDecision");
const upload = require("./multerConfig");
const createBook = require("./Routes/createBook");
const getComments = require("./Routes/getComments");
const router = express.Router();

router.post("/register", checkEmailExists, register);
router.post("/login", login);
router.post("/createShelf", jwtVerification, createShelf);
router.post("/createBook",jwtVerification, upload.single("bookCover"),createBook);

router.get("/getUserInfo", jwtVerification, getUserInfo);
router.get("/getBooksInShelf", jwtVerification, getBooksInShelf);
router.get("/getShelf", previewModeDecision, getShelf);
router.get("/getComments",getComments);

module.exports = router;
