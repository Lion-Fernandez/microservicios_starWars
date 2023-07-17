const Planets = require("../data");
const response = require("../utils/response");


module.exports = async (req, res)=> {
    const obj = req.body;
    const newPlanet = await Planets.createPlanet(obj);
    response(res, 201, newPlanet)
}