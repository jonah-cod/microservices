const jwt = require("jsonwebtoken");
const user = {
      username: "JohnSmith",
      email: "john@gmail.com",
      password: "password"
}

module.exports = {
      loginUser: (req, res) => {
            let details = req.body
            if (details.password === user.password) {
                  let token = jwt.sign({ user: user.username, email: user.email }, "mysecretkey")
                  return res.send(token)
            }
            res.send("Wrong credentials")
      },
      verifyUser: (req, res) => {
            let tokenString = req.headers.authorization
            let token = tokenString.split(" ")[1]
            console.log(`Token from api side: ${token}`)
            
            try {
                  let user = jwt.verify(token, "mysecretkey")
                  if (user) {
                        return res.send(true)
                  }
            } catch (error) {
                  res.send(false)
            }


      }
}