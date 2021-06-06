// require dependencies
const User = require('./User');
const Post = require('./Post');

// create associations between models
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// export models
module.exports = { User, Post };