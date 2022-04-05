import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import Model from './model/schema.js'
import cors from 'cors'
// app configuration
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8989


const pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "ap2",
    useTLS: true
});
// middleware
// it is nessary because it wil give only id: of the object back
// and wont give the json data back on post request
app.use(express.json())
// important for deployment
app.use(cors())





const db = mongoose.connection
db.once('open', () => {
    console.log("Database is Connected")

    try {
        const msgCollection = db.collection("messagecontents")
        const changeStream = msgCollection.watch()

        changeStream.on("change", (change) => {
            
            if (change.operationType === 'insert') {
                const messageDetails = change.fullDocument;
                pusher.trigger('message', 'inserted', 
                {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timestamp: messageDetails.timestamp,
                    received: messageDetails.received
                })
            }else{
                console.log("Error triggering Pusher")
            }

            console.log( 'A change Occurred', change)
        })
    }catch(error) {
        console.log(error)
    }
    // const msgCollection = db.collections("messagecontent")
    // const changeStream = msgCollection.watch()

})


// database connection
mongoose.connect(process.env.API_KEY)

// api routes

app.get('/message/sync', (req, res) => {
    Model.find((err, data) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(data)
        }
    })
})


app.post('/messages/new', (req, res) => {
    const dbMessage = req.body


    Model.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
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