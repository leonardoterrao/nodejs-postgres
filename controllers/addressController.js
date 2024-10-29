const Address = require("../models/Address");

exports.createAddress = async (req, res) => {
  const { street, number, city, UserId } = req.body;

  const address = await Address.create({ street, number, city, UserId });

  res.status(201).json({
    status: "success",
    address,
  });
};
