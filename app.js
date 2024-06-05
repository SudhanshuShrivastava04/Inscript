require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 8000 || process.env.PORT;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
app.use(express.static("public"));

// Templating engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/index.js"));
app.use("/", require("./server/routes/dashboard.js"));


app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
