const Kid = require("../../models/kid");

module.exports = {
  create,
  index,
  edit,
  deleteOne,
};

async function create(req, res) {
  req.body.user = req.user._id;
  const newKid = await Kid.create(req.body);
  res.json(newKid);
}

async function index(req, res) {
  const kids = await Kid.find({ user: req.user._id });
  res.json(kids);
}

// async function edit(req, res) {
//   const editedKid = await Kid.findByIdAndUpdate(req.params.id, req.body)
//   res.status(200).json(editedKid);
// }

async function edit(req, res) {
  const editedKid = req.body;
  Kid.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      Kid.findById(req.params.id)
        .then((kid) => {
          res.json(kid);
        })
        .catch((err) => res.json({ status: 400, err: err }));
    })
    .catch((err) => res.json({ status: 400, err: err }));
}

async function deleteOne(req, res) {
  const deletedKid = await Kid.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedKid);
}
