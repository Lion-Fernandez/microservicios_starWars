const characters = require("./characters.json");
const axios = require("axios");

module.exports = {
    // list: async () => characters,
    list: async () => {
        const result = await axios.get("http://database:8004/Character")
        return result.data
    },
    getById: async (id) => {
        return await axios.get(`http://database:8004/film/${id}`)
    },
    create: async (obj) => { 
        return await axios.post("http://database:8004/Character", obj)
    }
} 