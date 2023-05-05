const express = require('express');
const{getAllUser, createUser} = require('../controllers/userController')


// Create a  Router
const router = express.Router();

//user Routes
router.get('/', getAllUser);
router.post('/', createUser);


// Export Rputer
module.exports = router;

