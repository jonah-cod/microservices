const products = require("../products.json")



module.exports = {
      getAllProducts: (req, res)=>{
            return res.json(products)
      },
      getProductByID: (req, res)=>{
      let id = req.params
      let product = products.find(product=>product.id=id)
      res.json(product)
      
      }
}