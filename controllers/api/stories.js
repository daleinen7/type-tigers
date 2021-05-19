const Kid = require('../../models/kid');
const Story = require('../../models/story');

module.exports = {
  index
};

async function index(req, res) {
  const story = await Story.find({grade: req.params.id});
  res.json(story);
}