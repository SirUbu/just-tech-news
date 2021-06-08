// require dependencies
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// set url path for apis
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// export all router routes
module.exports = router;