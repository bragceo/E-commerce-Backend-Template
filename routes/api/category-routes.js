const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    await Category.create({ ...req.body });
    return res.status(200).json();
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    await category.update({ ...req.body });
    await category.save();
    return res.status(202).json();
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    await category.destroy();
    return res.status(202).json();
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
