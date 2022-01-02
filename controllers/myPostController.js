const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({ userid: req.session.userId }).populate('userid');
    if (req.session.userId) {
        return res.render('mypost', {
            blogposts
        });
    }
    res.redirect('/auth/login');
}