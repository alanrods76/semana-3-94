const router = require('express').Router();
const models = require('../../models');
const miControllers = require('../../controllers/Micontrollers.js');
const bcrypt = require('bcryptjs');

router.get('/', async(req, res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});

router.post('/signin', miControllers.signin);

module.exports = router;