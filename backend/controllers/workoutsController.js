const asyncHandler = require('express-async-handler');

// @desc Register a new user
// @route /api/user
// @acess Public
const getWorkout = asyncHandler(async (req, res) => {
  console.log('hallo');
  console.log('get /');
  res.json({ message: 'Get all workouts' });
});

module.exports = {
  getWorkout,
};
