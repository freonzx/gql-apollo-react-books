const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(
    'mongodb+srv://freonzx:235689a@cluster0-a4fmk.mongodb.net/test?retryWrites=true&w=majority'
)
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDB cluster')
})

const app = express()

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
