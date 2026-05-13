const express = require("express");

const app = express();

const PORT = 3000;

app.get("/student", (req, res) => {

    const student = {
        Name: "Ishrat Jahan Anee",
        Id: 232031051,
        Department: "CSE",
        University: "Feni University"
    };

    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
