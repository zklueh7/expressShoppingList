// Routes for items

const express = require("express");
const router = new express.Router();
const Item = require("../item");

// get all items
router.get("/", function(req, res, next) {
    try {
        let items = Item.findall();
        return res.json(items);
    }
    catch(err) {
        return next(err);
    }
});

// get a specific item
router.get("/:name", function(req, res, next) {
    try {
        let item = Item.find(req.params.name);
        return res.json(item);
    }
    catch(err) {
        return next(err);
    }
})


// add a new item
router.post("", function(req, res, next) {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json(newItem);
    }
    catch(err) {
        return next(err);
    }
})

// update an item
router.patch("/:name", function(req, res, next) {
    try {
        let item = Item.update(req.params.name, req.body);
        return res.json(item);
    }
    catch(err) {
        return next(err);
    }
})

// delete an item
router.delete("/:name", function(req, res, next) {
    try {
        Item.remove(req.params.name);
        return res.json("Item deleted");
    }
    catch(err) {
        return next(err);
    }
})

module.exports = router;