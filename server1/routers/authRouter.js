const Router = require("express")
const bcrypt = require("bcrypt")
const {check, validationResult} = require("express-validator")
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');
const config = require('config')
const authMiddleware = require('../middleware/auth.middleware')

const router = new Router();


router.post('/registration',

    [
        check('login').isLength({max:25}),
        check('email', "NON-email").isEmail(),
        check('password', "password > 3 and < 12").isLength({min:3, max:12})
    ],

    async (req, res) => {
        try{
            console.log(req.body)
            const errors = validationResult(req)
            
            console.log('123')

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }

            const {login, email, password} = req.body
            const candidate = await User.findOne({login, email})

            if (candidate){
                return res.status(400).json({message: `User with email ${email} already exist`})
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
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})

            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
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

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
})

module.exports = router