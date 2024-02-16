const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/gaols
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json({
    goalCount: goals.length,
    data: goals,
  });
});

// @desc    Set goal
// @route   POST /api/gaols
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // console.log('Please add text field');
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Update goal
// @route   PUT /api/gaol/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/gaol/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    if (!goal) {
      res.status(404).json({ message: "Goal not found" });
      return;
    }

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    console.error("Error deleting goal:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
