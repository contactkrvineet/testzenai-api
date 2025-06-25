const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample GET: https://testzenai.com/profile/vineet
app.get('/profile/:name', (req, res) => {
  res.json({ message: `You are visiting ${req.params.name}'s profile` });
});

// Sample POST: https://testzenai.com/getProfile
app.post('/getProfile', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'test') {
    res.json({ message: 'Login successful', user: username });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
