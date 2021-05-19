const Kid = require('../../models/kid');

module.exports = {
  create,
  index
};

async function create(req, res) {
  req.body.user = req.user._id;
  const newKid = await Kid.create(req.body);
  res.json(newKid);
}

async function index(req, res) {
  const kids = await Kid.find({user: req.user._id});
  res.json(kids);
}