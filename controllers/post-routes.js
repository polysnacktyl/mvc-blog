// const router = require('express').Router();
// const Post = require('../models/Post');


// router.post('/', async (req, res) => {
//   try { 
//     const postData = await Post.create({
//     post_title: req.body.post_title,
//     post_body: req.body.post_body,
//     post_author: req.body.post_author,
//     created_at: req.body.created_at, 
//     updated_at: req.body.updated_at,
    
//   });
  
//   res.status(200).json(postData)
// } catch (err) {
//   res.status(400).json(err);
// }
// });


// module.exports = router;