const { Anthropic } = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

async function extendIdea(ideaContent) {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `作为一个创意思维助手，请对这个想法进行延伸和拓展，给出3-5个相关的创新点：${ideaContent}`
      }]
    });

    return response.content[0].text;
  } catch (error) {
    console.error('AI 拓展失败:', error);
    throw error;
  }
}

module.exports = {
  extendIdea
}; 