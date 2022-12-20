const Router = require("express")
const {check, validationResult} = require("express-validator")
const User = require('../models/Users')
const Server = require('../models/Servers.js');
const config = require('config');
const authMiddleware = require("../middleware/auth.middleware");
const router = new Router();


router.post('/create',

    [
        check('name').isLength({max:25}),
    ],

    async (req, res) => {
        try{
            console.log(req.body)
            const errors = validationResult(req)
            console.log('123')

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }

            let {name, avatar, user} = req.body
            const link = `BeUp:${name}`

            if(avatar === 'default'){
                avatar = `https://avatars.dicebear.com/api/adventurer/${name}.svg`
            }

            console.log('прошел')
            const server = new Server({name, avatar, link, user: user})
            
            await server.save()
            return res.json({message: "Server successfully created"})

        }catch(e){
            console.log(e)
        }
})

router.get('/serverlist', authMiddleware,
    async (req, res) => {
        try {
            console.log(req.body)
            const servers = await Server.find({user: req.user.id})
            console.log(servers)
            return res.json(servers)
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
})


module.exports = router