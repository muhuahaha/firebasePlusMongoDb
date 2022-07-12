const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();
const { getWorkout } = require('../controllers/workoutsController');

router.get('/', getWorkout);

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get single Workout with id ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`Update Workout with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Workout with id ${req.params.id}`);
  });

const users = [{ name: 'Kyle' }, { name: 'Sally' }];

router.param('id', (req, res, next, id) => {
  console.log(id, 'idddd');
  req.user = users[id];
  next();
});

module.exports = router;
