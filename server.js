let express = require('express')
const req = require('express/lib/request')
const { sendFile } = require('express/lib/response')

let app = express()
app.use(express.static(__dirname + '/public'))

// let timeMiddleware = (req,res,next) => {
//     const time = true
//     if(time){
//         console.log('Acces accepted')
//         next();
//     }
//     else {
//         res.send('Opening soon')
//     }
// }



// app.get('/' , timeMiddleware , (req,res) => {
//     res.sendFile( __dirname+'/public/Home.html') 
// })
// app.get('/ContactUs' , (req,res) => {
//     res.sendFile( __dirname+'/public/ContactUs.html') 
// })
// app.get('/OurServices' , (req,res) => {
//     res.sendFile( __dirname+'/public/OurServices.html') 
// })

app.use('/views' , require('./routes/view'))

app.listen(5000, (err) => {
    if (err) throw err
    else console.log('server is running on port 5000')
})
