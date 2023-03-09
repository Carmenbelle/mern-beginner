const express = require('express');
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteworkout,
    updateWorkout
     } = require('../controllers/workoutControllers');


const router = express.Router()

// Get all workouts
router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Create a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteworkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router