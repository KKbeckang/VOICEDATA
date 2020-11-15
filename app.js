const express =require("express");
const path = require("path");
const routes = require("./routes")
const app = express();
const s2t = require("./Speech2textapi")
const http = require("http");






app.set("port",process.env.PORT || 8888);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(routes);
// app.use(s2t)
app.listen(app.get("port"),function(){
    console.log("Server started on port" + app.get("port"));

})