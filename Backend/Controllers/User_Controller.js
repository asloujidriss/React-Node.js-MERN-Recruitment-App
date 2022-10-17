const userModel = require("../Models/User_Model")


const bcrybt = require("bcrypt")
const jwt = require("jsonwebtoken")


const JWT_SEC = process.env.JWT_SEC
const R_JWT_SEC = process.env.R_JWT_SEC
let refreshTokens = []

const generateAccessToken = function (user) {
    return jwt.sign({ id: user.id, email: user.email }, "JWT_SEC", { expiresIn: "30m" })
}
// generate refreshToken
const generateRefreshtoken = function (user) {
    return jwt.sign({ id: user.id, email: user.email }, "R_JWT_SEC")
}

module.exports = {

    login: function (req, res) {
        userModel.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                res.status(406).json({ success: false, message: "err login", data: null })
            } else {
                if (user != null) {
                    if (bcrybt.compareSync(req.body.password, user.password)) {
                        const AccessToken = generateAccessToken(user)
                        const refreshToken = generateRefreshtoken(user)
                        refreshTokens.push(refreshToken)
                        res.status(200).json({ success: true, message: "helle dear", firstName: user.firstName, AccessToken, refreshToken })
                    } else {
                        res.status(404).json({ success: true, message: "incorrect password", data: null })
                    }
                } else {
                    res.status(406).json({success:false,message:"incorrect email",data:null})
                }
            }
        }
        )
    },
    refreshtoken: function (req, res, next) {
        // take the refresh token from user
        const refreshToken = req.body.token
        //send error if there is not token or its invalid
        if (!refreshToken) {
            return res.status(401).json("You are not authenticated")
        }
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("refresh token is not valid")
        }
        jwt.verify(refreshToken, "R_JWT_SEC", function (err, user) {
            err && console.log(err)
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
            const newAccessToken = generateAccessToken(user)
            const newrefreshToken = generateRefreshtoken(user)
            refreshTokens.push(newrefreshToken)
            res.status(200).json({
                AccessToken: newAccessToken,
                refreshToken: newrefreshToken
            })
        })
    },
    logout:function(req,res){
        
        const refreshToken = req.body.token
        refreshTokens = refreshTokens.filter(token=>token !==refreshToken)
        res.status(200).json({message:"u are logged out successfully"})
        
    }



}