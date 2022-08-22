const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const appPort = 8090
const mongoUrl = "mongodb+srv://admin:AAssdd54@cluster0.uhfurpn.mongodb.net/?retryWrites=true&w=majority"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          app.listen(appPort, () => console.log(`Server is running on port ${appPort}`))
        })
        .catch(err => console.log(`Error connecting to mongo: ${mongoUrl}`, err))

const WordsSchema = new mongoose.Schema({
  text: String,
  tags: Array,
  pre: String,
  post: String
})

mongoose.model("Words", WordsSchema)
const Words = mongoose.model("Words")

//Controller

const getAll = (req, res) => {
  console.log("getAll called")
  Words.find()
       .exec()
       .then(words => res.json(words))
       .catch(err => res.status(500).json(err))
}

const create = (req, res) => {
  console.log("create called")
  Words.create(req.body)
       .then(createWords => res.json(createWords))
       .catch(err => res.status(500).json(err))

}

const update = (req, res) => {
  console.log("update called")
  Words.updateOne({_id: req.params.id}, {$set: req.body})
       .exec()
       .then((word) => res.json(word))
       .catch(err => res.status(500).json(err))
}

const remove = (req, res) => {
  console.log("remove called")
  Words.deleteOne({_id: req.params.id})
       .exec()
       .then(() => res.json({success: true}))
       .catch(err => res.status(500).json(err))
}

// Routes

app.get("/words", cors(corsOptions), getAll)
app.post("/words", cors(corsOptions), create)
app.put("/words/:id", cors(corsOptions), update)
app.delete("/words/:id", cors(corsOptions), remove)