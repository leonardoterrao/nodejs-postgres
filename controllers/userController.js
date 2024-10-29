const User = require("../models/User");
const Address = require("../models/Address");

exports.getUsers = async (req, res) => {
  const users = await User.findAll({ raw: true });

  res.status(200).json({
    status: "success",
    users,
  });
};

exports.getUser = async (req, res) => {
  let user = await User.findOne({
    include: Address,
    where: { id: req.params.id },
  });

  user = user.get({ raw: true });
  res.status(200).json({
    status: "success",
    user,
  });
};

exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });

  res.status(204).json({
    status: "success",
  });
};

exports.createUser = async (req, res) => {
  const { name, occupation, newsletter } = req.body;

  const user = await User.create({ name, occupation, newsletter });

  res.status(201).json({
    status: "success",
    user,
  });
};

exports.updateUser = async (req, res) => {
  const { id, name, occupation, newsletter } = req.body;

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  const user = await User.update(userData, { where: { id: id } });

  res.status(201).json({
    status: "success",
    user,
  });
};
