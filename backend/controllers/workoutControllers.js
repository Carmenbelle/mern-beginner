const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutModel");

// Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "no such Workout" });
  }

  res.status(200).json(workout);
};

// Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // add to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a workout
const deleteworkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.send({
      message: "no such workout",
      statusCode: 404,
      data: deleteworkout,
    });
  } 

  const workout = await Workout.findOneAndDelete({_id: id})

  if (!workout) {
    return res.status(404).json({ error: "no such Workout" });
  }

  res.status(200).json(workout);

};

// Update a workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.send({
            message: "No such workout",
            statusCode: 404
        })
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.send({
            statusCode: 400,
            message: "No such workout"
        })
    }

    res.send({
        statusCode: 200,
        message: "successful",
        data: workout
    })
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteworkout,
  updateWorkout,
};
