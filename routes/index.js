const router = require('express').Router();

const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');

router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);

router.use((req, res) =>{
    res.status(404).end();
});

module.exports = router; 