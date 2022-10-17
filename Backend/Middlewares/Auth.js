const jwt = require("jsonwebtoken")
const JWT_SEC=process.env.JWT_SEC

const verify_token = function (req, res, next) {
    const authHeader = req.headers.authorization
    if (authHeader) {

        const token = authHeader

        jwt.verify(token, "JWT_SEC", function (err, user) {

            if (err) {
                return res.status(403).json({ message: "token is not valid" + err })
            } else {
                req.user = user
                next()
            }
        }
        )

    } else {
        res.status(401).json({ message: "u are not authenticated" })
    }
}

const verifytokenAndAuthorization = (req, res, next) => {
    verify_token(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else {
            return res.status(403).json("u are not alowed to do that")
        }
    })
}

const verifytokenAndAdmin = (req, res, next) => {
    verify_token(req, res, () => {
        if (req.user.isAdmin) {
             next()
        }
        else {
            return res.status(403).json("u are not alowed to do that")

        }
    })
}
module.exports = { verify_token, verifytokenAndAuthorization, verifytokenAndAdmin }