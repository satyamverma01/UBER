const captainModel = require('../models/captain.model');
module.exports.createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vechicleType}) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechicleType) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vechicle: {
            color,
            plate,
            capacity,
            vechicleType
        }
    });
    return captain;
};