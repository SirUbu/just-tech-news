// require dependencies
const Post = require('./Post');
const User = require('./User');

// create associations between models
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// export models
module.exports = { User, Post };