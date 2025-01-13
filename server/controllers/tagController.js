const Tag = require('../models/Tag');

exports.createTag = async (req, res) => {
  try {
    const { name, color } = req.body;
    const tag = new Tag({ name, color });
    await tag.save();
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.find().sort({ createdAt: -1 });
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTag = async (req, res) => {
  try {
    await Tag.findByIdAndDelete(req.params.id);
    res.json({ message: '标签已删除' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 