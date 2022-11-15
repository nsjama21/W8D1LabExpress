const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const vegetables = require("./models/vegetables")


app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get("/fruits", (req, res) => {
  res.render("Index", { fruits: fruits })
})

app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("Show", fruits[req.params.indexOfFruit])

})


// Index route for Vegetables
app.get("/vegetables", (req, res) => {
  res.render("Index2", { vegetables: vegetables })
})

// Show route for Vegetables

app.get("/vegetables/:indexOfVegetables", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("Show2", vegetables[req.params.indexOfVegetables])

})



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});