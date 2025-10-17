const course = require('../models/course');

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const courses = await course.find();
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'Error fetching courses' });
        }

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
