const planets = require("./planets.json");

module.exports = {
    list: async ()=> await axios.get("http://database:8004/planet"),
    getPlanetById: async (id)=> await axios.get(`http://database:8004/planet/${id}`),
    createPlanet: async (obj) => await axios.post("http://databasa:8004/planet", obj)
}