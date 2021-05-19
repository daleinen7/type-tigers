const { ReactComponent } = require('*.svg');
const Kid = require('../../models/kid');
const Story = require('../../models/story');

module.exports = {
  index,
};

async function index(req, res) {
  console.log(req.params);
  const kid = await Kid.find({_id: req.params});
  const story = await Story.find({grade: kid.level});
  res.json(story);
}