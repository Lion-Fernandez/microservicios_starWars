const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const obj = req.body;
    const newFilm = await Film.create(obj);
    response(res, 201, newFilm)
}


