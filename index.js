const express = require('express')
const path = require('path')
const exphandle = require('express-handlebars')
const app = express()
const os = require('os')

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

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная',
        isHome: true
    })
})
app.get('/about', (req, res) => {
    res.render('about',{
        title:'О компании',
        isAbout: true
    })
})
app.get('/add', (req, res) => {
    res.render('add',{
        title:'Добавить курс',
        isAdd: true
    })
})
app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Список курсов',
        isCourses: true
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`App started is ${PORT} port`);
})