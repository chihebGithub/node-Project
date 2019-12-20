const express = require('express');
const router = express.Router();
const get_all_posts=require('../controllers/postController').get_all_posts ;
const authenticateToken =require('../util/authenticate').authenticateToken;
/* GET users listing. */
router.get('/', get_all_posts);
router.get('/:id', require('../controllers/postController').delete_Post );
router.delete('/:id', require('../controllers/postController').delete_Post);
router.post('/', require('../controllers/postController').addPost);
module.exports = router;
