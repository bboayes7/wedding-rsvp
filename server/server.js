const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/rsvp', require('./routes/rsvpRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
