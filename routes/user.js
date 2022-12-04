const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();



//DELETE USER
//v1/user/123456
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth,userController.deleteUser);

module.exports= router;