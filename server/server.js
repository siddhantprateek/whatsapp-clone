import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Model from './model/schema.js'
// app configuration
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8989

// middleware
// it is nessary because it wil give only id: of the object back
// and wont give the json data back on post request
app.use(express.json())


// database connection
mongoose.connect(process.env.API_KEY)

// api routes

app.get('/message/sync', (req, res) => {
    Model.find((err, data) => {
        if(err) {
            res.status(500).send()
        }else{
            res.status(200).send(data)
        }
    })
})


app.post('/messages/new', (req, res) => {
    const dbMessage = req.body


    Model.create(dbMessage,  (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/', (req, res) => {
    res.status(200).send(`Server is running at port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})