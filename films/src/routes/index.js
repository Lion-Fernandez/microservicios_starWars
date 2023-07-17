const {Router} = require("express");
const middlewares = require("../middlewares");
const controllers = require ("../controllers");

const router = Router();

// router.get("/*", controllers.getFilms);
router.get("/films", controllers.getFilms);
router.get("./films", controllers.getFilmById);
router.post("/films", controllers.createFilm);

module.exports = router;