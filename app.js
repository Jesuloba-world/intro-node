const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

//404 page
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views/404.html"));
});

app.listen(port);
