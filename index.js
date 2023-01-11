const express = require("express");
const app = express();
//pug template
app.set("view engine", "pug");
app.set("views", "./public/routes");

app.use("/views", require("./public/routes/view"));
app.listen(5000, (err) => {
  if (err) throw err;
  else console.log("running server");
});
app.use(express.static(__dirname + "/public"));
