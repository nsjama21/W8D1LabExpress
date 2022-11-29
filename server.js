require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const Vegetable = require("./models/vegetables")
const mongoose = require("mongoose")
const methodOverride = require('method-override');
const fruitsController = require("./controllers/fruitController")


// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("connected to mongo")
})


console.log(process.env.MONGO_URI)

// Setup Engine

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// middleware: next is the only way to move on with your route
app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})

// a new body object containing new parsed data after the middleware?
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(express.static('public'))


// ===== Routes =====
app.use("/fruits", fruitsController)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// res.render requires an engine****
// INDEX
// app.get("/fruits", (req, res) => {
//   Fruit.find({}, (error, allFruits) => {
//     if (!error) {
//       res.status(200).render("Index", {
//         fruits: allFruits
//       })
//     } else {
//       res.status(400).send(error)
//     }
//   })

// })

// // NEW

// app.get("/fruits/new", (req, res) => {
//   console.log("2. controller")
//   res.render("New")
// })

// // app.get("/vegetables/new", (req, res) => {
// //   console.log("2. controller")
// //   res.render("New2")
// // })


// // DELETE
// app.delete("/fruits/:id", (req, res) => {
//   Fruit.findByIdAndDelete(req.params.id, (err, data) => {
//     res.redirect("/fruits")
//   })
// })


// // UPDATE

// app.put("/fruits/:id", (req, res) => {
//   req.body.readyToEat = req.body.readyToEat === "on" ? true : false
//   Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
//     if (!err) {
//       res.status(200).redirect(`/fruits/${req.params.id}`)
//     } else {
//       res.status(400).send(err)
//     }
//   })
// })








// // CREATE
// // app.post("/vegetables", (req, res) => {
// //   console.log("2. controller")
// //   if (req.body.readyToEat === 'on') {
// //     req.body.readyToEat = true;
// //   } else {
// //     req.body.readyToEat = false;
// //   }
// //   Vegetable.create(req.body, (error, createdVegetable) => {
// //     if (!error) {
// //       res.status(200).redirect("/vegetables")
// //     } else {
// //       res.status(400).send(error)
// //     }
// //   })
// // })

// // CREATE

// app.post("/fruits", (req, res) => {
//   if (req.body.readyToEat === "on") {
//     req.body.readyToEat = true
//   } else {
//     req.body.readyToEat = false
//   }
//   // This does the same thing as the if statement above but with a one line ternary
//   //req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

//   // Create 1st arg: the actual object we want to insert inside our database
//   // Callback 1st arg: error
//   // Callback 2nd arg: the newly created object
//   Fruit.create(req.body, (error, createdFruit) => {
//     if (!error) {
//       // redirects after creating fruit, to the Index page
//       res.status(200).redirect("/fruits")
//     } else {
//       res.status(400).send(error)
//     }
//   })
// })


// // EDIT

// app.get("/fruits/:id/edit", (req, res) => {
//   Fruit.findById(req.params.id, (err, foundFruit) => {
//     if (!err) {
//       res.status(200).render("Edit", { fruit: foundFruit })
//     } else {
//       res.status(400).send({ msg: err.message })
//     }
//   })
// })

// // CREATE
// // app.post("/fruits", (req, res) => {
// //   console.log("2. controller")
// //   if (req.body.readyToEat === 'on') {
// //     req.body.readyToEat = true;
// //   } else {
// //     req.body.readyToEat = false;
// //   }
// //   Fruit.create(req.body, (error, createdFruit) => {
// //     if (!error) {
// //       res.status(200).redirect("/fruits")
// //     } else {
// //       res.status(400).send(error)
// //     }
// //   })
// //   // redirects after creating fruit, to the Index page
// //   // res.redirect("/fruits")
// // })

// // SHOW
// app.get("/fruits/:id", (req, res) => {
//   Fruit.findById(req.params.id, (error, foundFruit) => {
//     if (!error) {
//       res
//         .status(200)
//         .render("Show", {
//           fruit: foundFruit
//         })
//     } else {
//       res
//         .status(400)
//         .send(error)
//     }
//   })
//   // res.send(fruits[req.params.indexOfFruit])


// })
// Always put your show route last***

// Index route for Vegetables
// app.get("/vegetables", (req, res) => {
//   Vegetable.find({}, (error, allVegetables) => {
//     if (!error) {
//       res.status(200).render("Index2", {
//         vegetables: allVegetables
//       })
//     } else {
//       res.status(400).send(error)
//     }
//   })

// })



// Show route for Vegetables

// app.get("/vegetables/:id", (req, res) => {
//   Vegetable.findById(req.params.id, (error, foundVegetable) => {
//     if (!error) {
//       res
//         .status(200)
//         .render("Show2", {
//           vegetable: foundVegetable
//         })
//     } else {
//       res
//         .status(400)
//         .send(error)
//     }
//   })

// })



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});