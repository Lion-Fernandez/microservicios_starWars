const {Router} = require("express");
const store = require("../database");
const {validateModel} = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req,res)=> {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response)
});    
router.get("/:model/:id", validateModel, async (req,res)=> {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response)
});    
// router.post("/:model", validateModel, async (req,res)=> {
//     const { model } = req.params;
//     let {} = req.body
//     const response = await store[model].insert();
//     res.status(200).json(response)
// });    

// router.get("/character", async (req,res)=> {
//   const response = await Character.list();
//   res.status(200).json(response)
// });
// router.get("/planet", async (req,res)=> {
//   const response = await Planet.list();
//   res.status(200).json(response)
// });

module.exports = router;