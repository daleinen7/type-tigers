const Kid = require('../../models/kid');

module.exports = {
  create
};

async function create(req, res) {
  req.body.user = req.user._id;
  const newKid = await Kid.create(req.body);
  res.json(newKid);
}

