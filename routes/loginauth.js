var router = require('express').Router();

const { login } = require("../controller/index")
router.post('/login', login);

module.exports = router;