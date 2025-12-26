const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "WASSUUPP",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server starting on port ${port}`);
});
