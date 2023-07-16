const { response } = require("../utils");
const Character = require("../data");

module.exports = async  (req, res) => {
    const info = req.body
    const newCharacter= await Character.create(info);
    response(res, 201, newCharacter.data)
//    res.status(400).json({ error: error.menssage }) 
}


// module.exports = async(req, res) => {
//   try {
//     const newCharacter= await Character.create();
//     response(res, 201, newCharacter)
//     // res.status(200).send("creando el personaje...")}
//   } catch (error) {
//     res.status(400).json({ error: error.menssage })
//   }
// }