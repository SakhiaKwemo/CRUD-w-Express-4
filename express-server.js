const express = require('express')
const app = express()
const PORT = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const DRAGONS = {
    "dragon1": {
        img: "https://thumbs.dreamstime.com/z/cute-dragon-generated-midjourney-ai-pro-subscription-adorable-cute-dragon-lizard-illustation-children-friendly-268512921.jpg", 
        name: "Goldy", 
        territory:"Desert"
    },
    "dragon2": {
        img: "https://4kwallpapers.com/images/walls/thumbs_3t/9624.jpg",
        name: "Swimmy", 
        territory:"Ocean"
    },
    "dragon3": {
        img: "https://thumbs.dreamstime.com/b/cute-dragon-generated-midjourney-ai-pro-subscription-adorable-cute-dragon-lizard-illustation-children-friendly-268512985.jpg",
        name: "Airy", 
        territory:"Sky"
    }
}


app.get('/', function (req, res) {
  res.render('index', {dragons: DRAGONS})
})

app.get('/addDragon', function (req, res) {
    res.render('addDragon')
})

app.get('/updateDragon/:dragonId', function (req, res) {
    res.render('editDragon', {dragon: DRAGONS[req.params.dragonId], dragonId: req.params.dragonId})
})

app.post('/updateDragon/:dragonId', function (req, res) {
    console.log(DRAGONS)
    DRAGONS[req.params.dragonId] = req.body
    res.redirect('/')
})

app.post('/addDragon', function (req, res) {
    const numbDragons = Object.values(DRAGONS).length
    DRAGONS[`dragon${numbDragons + 1}`] = req.body 
    res.redirect('/')
})

app.post('/deleteDragon/:dragonId', function (req, res) {
    delete DRAGONS[req.params.dragonId]
    res.redirect('/')
})

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT)  
})

// const obj = {
//     a: 1, 
//     b: 2, --> 10 
//     c: 3
// }

// obj[b] = 10