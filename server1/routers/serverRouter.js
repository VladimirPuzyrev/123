const Router = require("express")
const {check, validationResult} = require("express-validator")
const User = require('../models/Users')
const Server = require('../models/Servers.js');
const config = require('config');
const authMiddleware = require("../middleware/auth.middleware");
const router = new Router();


router.post('/createserver', authMiddleware,

    [
        check('name').isLength({max:25}),
    ],

    async (req, res) => {
        try{
            console.log(req.body)
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }

            let {name, avatar} = req.body
            const link = `BeUp:${name}`

            if(avatar === 'default'){
                avatar = `https://avatars.dicebear.com/api/adventurer/${name}.svg`
            }

            console.log('прошел')
            const server = new Server({name, avatar, link, users: req.user.id})
            
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
            const servers = await Server.find({users: req.user.id})
            return res.json(servers)
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
})


module.exports = router