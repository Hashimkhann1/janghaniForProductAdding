import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import Connection from './Database/db.js'
import router from './router/router.js'



const app = express()

app.use(cors())

app.use(bodyparser.json({limit : '30mb' , extended : true}))
app.use(bodyparser.urlencoded({limit : '30mb' , extended : true}))

app.use(router)

const PORT = 4000;

app.listen(PORT , () => console.log("Server is runnig on Port " , PORT))

Connection()