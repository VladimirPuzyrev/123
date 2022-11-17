const Router = require("express")
const bcrypt = require("bcrypt")
const {check, validationResult} = require("express-validator")
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');
const config = require('config')

const router = new Router();


router.post('/registration',
    [
        check('login', "NON-login"),
        check('email', "NON-email").isEmail(),
        check('password', "password > 3 and < 12").isLength({min:3, max:12})
    ],

    async (req, res) => {
        try{
            console.log(req.body)
            const errors = validationResult(req)
            
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Uncorrect fields", errors})
            }

            const {login, email, password} = req.body
            const candidate = await User.findOne({login, email})

            if (candidate){
                return res.status(400).json({message: `Users with this alredy exist`})
            }

            console.log('прошел')
            const saltPassword = await bcrypt.hash(password, 8)
            const user = new User({login, email, password: saltPassword})

            await user.save()
            return res.json({message: "User successfully created"})

        }catch(e){
            console.log(e)
        }
})

router.post('/login',

    async (req, res) => {
        try{
            const {login, email, password} = req.body

            const user = await User.findOne({login, email})

            if(!user){
                return res.status(404).json({message: "User not found"})
            }

            const isPassValid = bcrypt.compareSync(password, user.password)

            if(!isPassValid){
                return res.status(400).json({message: "Invalid Password"})
            }

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})

            return res.json({
                token,
                user:{
                    id: user.id,
                    login: user.login,
                    email: user.email,
                    avatar: user.avatar
                }
            })

        }catch(e){
            console.log(e)
        }
})


module.exports = router