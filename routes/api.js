const router = require('express').Router();
const posts = require('../model/posts');
const cors = require('cors');

const options = {
    origin: 'http://localhost:3000'
}

router.use(cors(options));

router.get('/all',  (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

router.post('/new', (req, res) => {
    let { title, description } =  req.body;
    posts.newPost(title, description)
    res.send('Post adicionado')
});

module.exports = router;