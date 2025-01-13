const Idea = require('../models/Idea');
const { extendIdea } = require('../services/aiService');

exports.createIdea = async (req, res) => {
  try {
    const { content, tagIds } = req.body;
    const idea = new Idea({
      content,
      tags: tagIds
    });
    
    // AI 思维拓展
    if (req.query.withAI === 'true') {
      const aiExtension = await extendIdea(content);
      idea.aiExtensions.push({
        content: aiExtension,
        createdAt: new Date()
      });
    }

    await idea.save();
    res.status(201).json(idea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find()
      .populate('tags')
      .sort({ createdAt: -1 });
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateIdea = async (req, res) => {
  try {
    const { content, tagIds } = req.body;
    const idea = await Idea.findByIdAndUpdate(
      req.params.id,
      { 
        content, 
        tags: tagIds,
        updatedAt: new Date()
      },
      { new: true }
    ).populate('tags');
    res.json(idea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteIdea = async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ message: '想法已删除' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 