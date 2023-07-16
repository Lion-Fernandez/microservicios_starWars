const {Router} = require("express");
const controllers = require("../controllers"); 
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacterById);
router.post("/", middlewares.characterValidation, controllers.createCharacters);

// axios.get("http://database:8004/Character")

module.exports = router;