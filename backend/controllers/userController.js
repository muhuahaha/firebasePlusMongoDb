const asyncHandler = require('express-async-handler');

// @desc Register a new user
// @route /api/user
// @acess Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send('Register Route');
});

// @desc Register a new user
// @route /api/user
// @acess Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser,
};