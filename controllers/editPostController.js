const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogposts = await BlogPost.findById(req.params.id);
    if (req.session.userId) {
        return res.render('editpost', {
            blogposts
        });
    }
    res.redirect('/auth/login');
}