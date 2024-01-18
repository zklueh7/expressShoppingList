const items = require("./fakeDb");

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        items.push(this);
    }

    static findAll() {
        return items;
    }

    static find(name) {
        let foundItem = items.find(function(value) {
            return value.name === name;
        })
        if (foundItem === undefined) {
            throw { message: "Not found", status: 404 };
        }
        return foundItem;
    }

    static update(name, data) {
        let foundItem = items.find(function(value) {
            return value.name === name;
        });
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    static remove(name) {
        let foundIdx = items.findIndex(function(value) {
            value.name === name;
        });
        if (foundIdx === -1) {
            throw { message: "Not Found", status: 404 };
        }
        items.splice(foundIdx, 1);

    }
}

module.exports = Item;