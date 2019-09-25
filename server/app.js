const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// Config Mangoose
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-a4fmk.mongodb.net/test?retryWrites=true&w=majority`
)
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDB cluster')
})

const app = express()

// Allow CORS
app.use(cors())

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
)

app.listen(4000, () => {
    console.log('Listening at port 4000')
})
