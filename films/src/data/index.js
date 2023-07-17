const films = require("./films.json");
const axios = require("axios");

module.exports = {
  list: async ()=> {
    return await axios.get("http://database:8004/film")
  },
  getById: async (id)=>{
    return await axios.get(`http://database/film/${id}`)
  },
  create: async (obj)=>{
    return await axios.post("http://database/film", obj)
  }
}