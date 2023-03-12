require('dotenv').config()
import {router} from './routes/product'

require('express-async-errors')

const express = require('express');
const app = express();

const connectDb = require('./db/connect');

const notFoundMiddleWare = require('./middleware/not-found')
const errorMiddleWare = require('./middleware/error-handler')

// middleware

app.use(express.json())

// routes

app.get('/', (req : any, res : any) => { 
    res.send('<h1>Furniture Store API</h1><a href="/api/v1/products">products route</a>');
})

app.use('/api/v1/products', router)

// products routes

app.use(notFoundMiddleWare);
app.use(errorMiddleWare)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen( port, console.log(`server listening on port ${port}`))
    } catch (err: any) { 

    }
}

start()