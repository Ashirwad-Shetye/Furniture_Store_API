require('dotenv').config()

// async errors

const express = require('express');
const app = express();

const notFoundMiddleWare = require('./middleware/not-found')
const errorMiddleWare = require('./middleware/error-handler')

// middleware

app.use(express.json())

// routes

app.get('/', (req : any, res : any) => { 
    res.send('<h1>Furniture Store API</h1><a href="/api/v1/products">products route</a>');
})

// products routes

app.use(notFoundMiddleWare);
app.use(errorMiddleWare)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        // connect 
        app.listen( port, console.log(`server listening on port ${port}`))
    } catch (err: any) { 

    }
}

start()