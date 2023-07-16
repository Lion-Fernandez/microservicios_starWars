const Planets = require("../data");

module.exports= async (req, res)=> {
    const planets = await Planets.list();
    res.status(200).json(planets)
}