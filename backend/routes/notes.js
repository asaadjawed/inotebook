const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req,res)=> {
    obj = {
        id:1,
        name:'Our Notes',
        email:'john.doe@example.com'
    },
    res.json(obj);
})

module.exports = router;