const axios = require("axios");


module.exports = {
      verifier: async(req, res, next)=>{
            let tokenString = req.headers.authorization
            let token = tokenString?.split(" ")[1]
            if (token) {
                  await axios.get("http://localhost:4040/users/verify", {headers:{authorization: `Bearer ${token}`}}).then(
                        resp=>{
                              if(resp.data){
                                    return next()
                              }
                              
                              res.status(403).send("forbidden")
                        }
                  )
            }else{
                  res.status(400).send("bad request")
            }
      }
}