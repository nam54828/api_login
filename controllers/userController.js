const { findById, findByIdAndDelete } = require("../models/User");
const User = require("../models/User");

const userController = {
    // GET ALL USERS
 

    //DELETE USER
    deleteUser: async(req,res)=>{
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete susscessfully");
        } catch (error) {
            res.status(500).json(err);
        }
    }

}

module.exports = userController;