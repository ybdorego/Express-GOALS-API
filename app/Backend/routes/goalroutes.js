const express = require('express')
const router = express.Router()
const {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
    } = require('../Controllers/goalControllers')


router.get('/',getGoals);

router.post('/',addGoal);

router.put('/:id',updateGoal);

router.put('/:id',deleteGoal);
    
module.exports = router