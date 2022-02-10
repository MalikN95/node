const express = require('express')
const path = require('path')
const exphandle = require('express-handlebars')
const app = express()
const os = require('os')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const aboutRoutes = require('./routes/about')
const coursesRoutes = require('./routes/coutses')

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
console.log('v1.2')

const hbs = exphandle.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/', homeRoutes)
app.use('/add',addRoutes)
app.use('/about',aboutRoutes)
app.use('/courses',coursesRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`App started is ${PORT} port`);
})