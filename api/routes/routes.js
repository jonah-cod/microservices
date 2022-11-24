const router = require("express").Router()
const { getAllProducts, getProductByID } = require("../controllers/controller")
const { verifier }= require("../middleware/verified")

router.get("/", verifier, getAllProducts)
router.get("/:id", verifier, getProductByID)


module.exports = router