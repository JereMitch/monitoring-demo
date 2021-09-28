const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '6eb60e27fb9e4f7590f260ee391f35da',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('Html was monitored successfully!')
})

const studentArr = []

app.post('/api/students', (req, res) => {
    const {name} = req.body
    studentArr.push(name)
    rollbar.log('Student added')
    res.status(200).send(studentArr)
})

const port = process.env.PORT || 5500

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Hey you, you're finally awake on port ${port}`))
