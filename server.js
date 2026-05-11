const express = require('express');
const app = express();

const PORT = 3001;

app.get('/student', (req, res) => {
  const student = {
    id: 232031006,
    name: "Tanzina Jamal Miazi",
    department: "CSE",
    semester: "6th"
  };

  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});