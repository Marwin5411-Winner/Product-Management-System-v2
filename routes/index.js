var express = require("express");
var router = express.Router();
var Product = require("../models/products");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const product = await Product.find({});
  if (product.length == 0) {
    res.json("No products found");
  } else {
  res.json(product);
  }
});

router.post("/", async function (req, res, next) {
  const product = new Product(req.body);
  await product.save().then((product) => {
    res.json(product + "\n added successfully");
  }
  ).catch((err) => {
    res.json(err);
  });
});

router.delete("/:id", async function (req, res, next) {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.json("No product found");
  }
  res.json(product + "\n deleted successfully");
});

router.put("/:id", async function (req, res, next) {
  const product = new Product(req.body);
  await Product.findById(req.params.id)
    .then((product) => {
      product.name = req.body.name;
      product.price = req.body.price;
      product.type = req.body.type;
      product.amount = req.body.amount;
      product
        .save()
        .then((product) => {
          res.json(product + "\n updated successfully");
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
