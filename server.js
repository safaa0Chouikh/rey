const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('awel test');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});