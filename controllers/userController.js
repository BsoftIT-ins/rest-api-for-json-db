const {readFileSync} = require('fs');
const path = require('path');


/**
 * @desc get all user data
 * @name GET /api/v1/user 
 * @access public
 */

const getAllUser = (req, res) => {
    //Get user data from JSON DB
    const users = JSON.parse(readFileSync(path.join(__dirname, '../DB/users.json')));
   
    //Send data
    res.status(200).json(users);
}

/**
 * @desc Create a user data
 * @name POST /api/v1/user 
 * @access public
 */
const createUser =(req, res) =>{
    res.json(req.body);
}

//Exports Routes
module.exports = {
    getAllUser,
    createUser
}