const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))