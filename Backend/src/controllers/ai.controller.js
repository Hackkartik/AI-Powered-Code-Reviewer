const generateContent = require('../services/ai.service.js');

const getReview = async (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const response = await generateContent(code);
    res.send(response);
  } catch (error) {
    console.error('AI service error:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { getReview };
