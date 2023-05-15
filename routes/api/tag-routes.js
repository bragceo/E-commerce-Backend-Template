const router = require("express").Router();
const { Tag, Product  } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // const tags = await Tag.findAll({ include: [Product, ProductTag] });
    const tags = await Tag.findAll({ include: [Product] });
    return res.status(200).json(tags);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    return res.status(200).json(tag);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    await Tag.create({ ...req.body });
    return res.status(200).json();
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    await tag.update({ ...req.body });
    await tag.save();
    return res.status(202).json();
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    await tag.destroy();
    return res.status(202).json();
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
