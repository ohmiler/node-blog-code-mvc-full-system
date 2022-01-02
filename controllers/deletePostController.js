const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    await BlogPost.deleteOne({ _id: req.params.id });
    res.redirect('/posts/mypost');
}