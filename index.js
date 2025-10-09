const express = require('express')
const app = express()
const port = 3000

// route
app.get('/', (req, res) => {
    var a = 10;
    var b = 20;
    var c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})