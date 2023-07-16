const server = require("./src/server");
const { PORT } = require("./src/config/envs")

const {Character} = require("./src/database/")

// Character.find().
// populate("homeworld", ["_id", "name"])
// .populate("films", ["_id", "title"])
// .then(res=>console.log(res))

// Character.list()
// .then(res=> console.log(res[0]));

// Character.get(2)
// .then(res=> console.log(res))

// Character.insert({
//  _id:"200",
//  name:"Lion jr Dev",
//  birth_year: "1983",
// }).then(res=>console.log(res))

server.listen(PORT, ()=> {
    console.log(`Database service on ${PORT}`)
})