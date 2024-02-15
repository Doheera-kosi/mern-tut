const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/gaols
// @access  Private
const getGoals = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get gaols" });
});

// @desc    Set goal
// @route   POST /api/gaols
// @access  Private
const setGoal = asyncHandler( async (req, res) => {
  if (!req.body.text) {
    // console.log('Please add text field');
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Set goal" });
});

// @desc    Update goal
// @route   PUT /api/gaol/:id
// @access  Private
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    Delete goal
// @route   DELETE /api/gaol/:id
// @access  Private
const deleteGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
