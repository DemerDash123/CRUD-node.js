const { error } = require("console");
const express = require("express");
const app = express();
const courseRouter = require("./routes/courses.route");
const port = 3000;

app.use(express.json());

app.use("/api/courses", courseRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
