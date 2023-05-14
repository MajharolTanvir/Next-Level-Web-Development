const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');

//Mongoose code
async function bootstrap() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log(`Database connection established`)
    } catch (err) {
        console.log(`Failed to connect database`,err)
  }
}

bootstrap()

//Express server code
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})