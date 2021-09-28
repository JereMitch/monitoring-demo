const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
})

const port = process.env.PORT || 5500

app.listen(port, () => console.log(`Hey you, you're finally awake on port ${port}`))
