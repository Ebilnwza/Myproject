const express = require('express');
const router = express.Router();
const db = require('../mongoDB/usermodel');

router.post('/', async (req, res) => {
    const { ID: UsernameSend, password: passwordsend } = req.body;

    try {
        const data_from_db = await db.find();
        const user = data_from_db.find(item => item.Username === UsernameSend);

        if (!user || user.Password !== passwordsend) {
            res.redirect('/login');
            return;
        }

        res.redirect(`/home/${user._id}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;
