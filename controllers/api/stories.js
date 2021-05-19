const Kid = require('../../models/kid');
const Story = require('../../models/story');

module.exports = {
  index
};

async function index(req, res) {
  const kid = await Kid.findById(req.params.id);
  const story = await Story.find({grade: kid.level});
  res.json(story);
}