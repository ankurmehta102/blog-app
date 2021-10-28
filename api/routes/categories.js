const router = require("express").Router();
const Categories = require("../models/Category");

router.post("/", async (req, res) => {
  const newCat = new Categories(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allCat = await Categories.find();
    res.status(200).json(allCat);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
