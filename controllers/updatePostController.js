const BlogPost = require('../models/BlogPost');
const path = require('path');

module.exports = async (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        await BlogPost.updateOne(
            { _id: req.body.id },
            { $set: {
                title: req.body.title,
                body: req.body.body,
                image: '/img/' + image.name
            }
        }).populate('userid');
        res.redirect('/posts/mypost');
    })
}