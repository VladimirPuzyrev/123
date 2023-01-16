const Router = require("express")
const {check, validationResult} = require("express-validator")
const User = require('../models/Users')
const News = require('../models/News.js');
const config = require('config');
const authMiddleware = require("../middleware/auth.middleware");
const router = new Router();


router.post('/createnews', authMiddleware,

    [
        check('title').isLength({max:50}),
    ],

    async (req, res) => {
        try{
            console.log(req.body)
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }

            let {title, text} = req.body

            console.log('прошел')
            const news = new News({title, text, user: req.user.id})
            
            await news.save()
            return res.json({message: "News successfully created"})

        }catch(e){
            console.log(e)
        }
})

router.get('/newslist',
    async (req, res) => {
        try {
            console.log(req.body)
            const newsList = await News.find()
            return res.json(newsList)
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
})


module.exports = router