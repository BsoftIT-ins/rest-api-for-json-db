const {readFileSync, writeFileSync} = require('fs');
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

    //Get user data from JSON DB
    const users = JSON.parse(readFileSync(path.join(__dirname, '../DB/users.json')));
    
    //Get body data
    const {name, skill} = req.body;

    //data validation
    if(!name || !skill){
        res.status(400).json({
            message: "Name & skill is required"
        });
    }else{
        users.push({
            id : Math.floor(Math.random() * 100000000000).toString(),
            name: name,
            skill: skill
        });
        writeFileSync(path.join(__dirname, '../DB/users.json'), JSON.stringify(users));
        res.status(201).json({
            message: "User created successfully"
        });
    }
}

//Exports Routes
module.exports = {
    getAllUser,
    createUser
}