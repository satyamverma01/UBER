const express = require('express');
const captainController = require('../controllers/captain.controller');
const {body}=require('express-validator');
const userModel = require('../models/user.model');
const router = express.Router();
module.exports = router;
router.post('/register', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vechicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vechicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vechicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vechicle.vechicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
], captainController.registerCaptain);
module.exports = router;