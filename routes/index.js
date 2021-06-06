// require dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

// set url path for apis
router.use('/api', apiRoutes);

// set url path for any other path
router.use((req, res) => {
    res.status(404).end();
});

// export all router routes
module.exports = router;