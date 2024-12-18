const express = require("express");
const app = express();

const place = require("./place.js");

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("sample3", { places: place });
});

app.get("/fish/:id", (req, res) => {
  const id = req.params.id;
  res.render("fish", { id: id, places: place  });
});
app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));