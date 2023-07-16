const {Router} = require("express");
const router = Router();
const controllers= require("../controllers")

// router.get("/", (req, res)=> {
//     res.status(200).send("hola planetas")
// })

router.get("/*", controllers.getPlanets)

module.exports = router;