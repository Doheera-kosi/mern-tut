// @desc    Get goals
// @route   GET /api/gaols
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get gaols' })
}

// @desc    Set goal
// @route   POST /api/gaols
// @access  Private
const setGoal = (req, res) => {
  res.status(200).json({message: 'Set goal'})
}

// @desc    Update goal
// @route   PUT /api/gaol/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc    Delete goal
// @route   DELETE /api/gaol/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}