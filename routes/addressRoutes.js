const express = require("express");

const addressController = require("../controllers/addressController");

const router = express.Router();

router
  .route("/")
  .post(addressController.createAddress);


router
  .route("/:id")
  .delete(addressController.deleteAddress);


module.exports = router;
