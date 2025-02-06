const ShoppingCart = (function() {
    let items = [];

    function addItem(item) {
        items.push(item);
    }

    function getTotal() {
        return items.reduce((total, item) => total + item.price, 0);
    }

    return {
        addItem: addItem,
        getTotal: getTotal
    };
})();

ShoppingCart.addItem({ name: 'Apple', price: 1.5 });
ShoppingCart.addItem({ name: 'Banana', price: 2.0 });

console.log(`Total: $${ShoppingCart.getTotal()}`);
