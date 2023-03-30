
// The dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on the Twelve-Factor App methodology.
// Environment variables allow us to manage the configuration of our applications separately from our codebase. Separating configurations makes it easier for our application to be deployed in different environments.
// HTTP port,database connection string,location of static files,endpoints of external services
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')
const app = express()

const PORT = 3000
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log(`Server Started at port No ${PORT}`);
})
