const express = require('express');

const router = express.Router();
const { getWorkout } = require('../controllers/workoutsController');

router.get('/', (req, res) => {
  console.log('get /');
  res.json({ message: 'Get all workouts' });
});

router.post('/', (req, res) => {
  res.send('Create workout');
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
