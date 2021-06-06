// require dependencies
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

// add router logic to url path
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// export all router routes
module.exports = router;