const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('courses', {
        title: 'Список курсов',
        isCourses: true
    })
})

module.exports = router