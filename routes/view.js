let express = require('express')
let router = express.Router()
let path = require('path')


let timeMiddleware = (req,res,next) => {
    const time = true
    if(time){
        console.log('Acces accepted')
        next();
    }
    else {
        res.send('Opening soon')
    }
}


router.get('/' , timeMiddleware , (req,res) => {
    res.sendFile(path.join( __dirname , '../' , 'public' , 'Home.html')) 
})
router.get('/ContactUs' , (req,res) => {
    res.sendFile(path.join( __dirname , '../' , 'public' , 'ContactUs.html')) 
})
router.get('/OurServices' , (req,res) => {
    res.sendFile(path.join( __dirname , '../' , 'public' , 'OurServices.html')) 
})

module.exports = router

