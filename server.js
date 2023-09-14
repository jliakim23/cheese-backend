const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cheeseController = require('./controllers/cheeseController')
const morgan = require('morgan')

require("dotenv").config();

app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true}))

app.get('/', (req,res) => {
    res.send("Cheezee")
})

app.use('/cheese', cheeseController)
app.listen(PORT, () => console.log("listening to", PORT))