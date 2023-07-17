const {Router} = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares"); 

const router = Router();

// router.get("/", (req, res)=> {
//     res.status(200).send("hola planetas")
// })

router.get("/*", controllers.getPlanets);
router.post("/planets", middleware.planetValidation, controllers.createPlanet);

module.exports = router;