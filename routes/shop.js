const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("../routes/admin");

const router = express.Router();

router.get("/", (req, res, next) => {
	const products = adminData.products;
	res.render("shop", { products, pageTitle: "My Shop", path: "shop" });
});

module.exports = router;
