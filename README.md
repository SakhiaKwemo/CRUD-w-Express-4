# Lighthouse Labs | CRUD with Express

* [x] Introduction
* [x] Express
    - Show HTTP vs Express (Demo)
    - Start Express Server (Demo)
* [x] Routes
    - Explain Routes as Adresses (Theory)
    - Show Routes in Express Server (Demo)
    - req.params/req.body
* [x] EJS Templates
    - Explain EJS template (Theory)
    - Add EJS (Demo)
* [x] CRUD
    - Explain CRUD commands (Theory)

    BREAK 

* [x] Creating My Own Website Template
    - Let the class pick

## Express

## Routes!
```js
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.put('/pizza', function (req, res) {
  res.send('Hello World')
})

// Routes = Adress -> get('/')
//get('/')
//post('/')

Routes/Adress = method + endpoint
- method = get/post/delete/put/path
- endpoint = '/' ..... '/pizzas' .... '/specificPizza'

```

```js
.get('/home/:number')
.get('/home/1234')
.get('/hello/:number/:alphabetical')



req.params = {number: 1234, alphabetical: 'abc'}
```

## Data

const data = {
    dragon1: {
        img: "https://thumbs.dreamstime.com/z/cute-dragon-generated-midjourney-ai-pro-subscription-adorable-cute-dragon-lizard-illustation-children-friendly-268512921.jpg", 
        name: "Goldy", 
        territory:"Volcano"
    }
}


## CRUD

CRUD       |      Method      |      Path      |      Purpose
==============================================================

<!-- CREATE     |      POST        |   'addDragon'  | Add Dragon to database -->
<!--            |      GET         |   'addDragon'  | Page to add dragon  -->

<!-- READ       |      GET         |   showDragons  | Display all dragons -->
 
<!-- UPDATE     |      POST        |   updateDragon/:dragonId | Update Dragon
           |      GET         |   updateDragon/:dragonId | Show me page to update dagon -->

<!-- DELETE     |      POST        |   deleteDragon/:dragonId |Delete my Dragon -->





