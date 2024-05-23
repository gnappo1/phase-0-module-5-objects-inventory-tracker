const { assert, js } = require('./helpers.js')

// const { expect } = require('chai');
// const { getTotalInventoryValue, findCheapestItem, findExpensiveItems } = require('./index');

describe('Advanced Objects Lab', () => {
    const testInventory = {
        computers: [
            { id: 1, brand: 'Apple', model: 'MacBook Pro', price: 2000 },
            { id: 2, brand: 'Dell', model: 'XPS 15', price: 1500 },
            { id: 3, brand: 'HP', model: 'Spectre x360', price: 1300 },
            { id: 4, brand: 'Lenovo', model: 'ThinkPad X1', price: 1700 },
            { id: 5, brand: 'Asus', model: 'ZenBook', price: 1100 },
        ],
        phones: [
            { id: 1, brand: 'Apple', model: 'iPhone 13', price: 999 },
            { id: 2, brand: 'Samsung', model: 'Galaxy S21', price: 799 },
            { id: 3, brand: 'Google', model: 'Pixel 6', price: 699 },
            { id: 4, brand: 'OnePlus', model: '9 Pro', price: 969 },
            { id: 5, brand: 'Sony', model: 'Xperia 5 II', price: 949 },
        ],
    };

    const testInventory2 = {
        computers: [
            { id: 1, brand: 'Apple', model: 'MacBook Pro', price: 2000 },
            { id: 2, brand: 'Dell', model: 'XPS 14', price: 1200 },
            { id: 3, brand: 'HP', model: 'Spectre x360', price: 1300 },
            { id: 4, brand: 'Lenovo', model: 'ThinkPad X2', price: 1900 },
            { id: 5, brand: 'Asus', model: 'ZenBook 2', price: 1600 },
        ],
        phones: [
            { id: 1, brand: 'Apple', model: 'iPhone 12', price: 1000 },
            { id: 2, brand: 'Samsung', model: 'Galaxy S20', price: 700 },
            { id: 3, brand: 'Google', model: 'Pixel 5', price: 600 },
            { id: 4, brand: 'OnePlus', model: '8 Pro', price: 900 },
            { id: 5, brand: 'Sony', model: 'Xperia 1', price: 650 },
        ],
    };

    describe('inventory', () => {
        it('should be an object', () => {
            expect(inventory).to.be.an('object');
        });

        it('should have a computers property', () => {
            expect(inventory).to.have.property('computers');
            expect(inventory.computers).to.be.an('array');
        });

        it('should have a phones property', () => {
            expect(inventory).to.have.property('phones');
            expect(inventory.phones).to.be.an('array');
        });

        it('should have the correct computers data', () => {
            expect(inventory.computers).to.deep.equal(testInventory.computers);
        });

        it('should have the correct phones data', () => {
            expect(inventory.phones).to.deep.equal(testInventory.phones);
        });
    });

    describe('getTotalInventoryValue', () => {
        it('should return the total value of all items in the inventory', () => {
            const totalValue = getTotalInventoryValue(testInventory2);
            expect(totalValue).to.equal(11850);
        });
    });

    describe('findCheapestItem', () => {
        it('should return the cheapest item in the computers category', () => {
            const cheapestComputer = findCheapestItem(testInventory2, 'computers');
            expect(cheapestComputer).to.deep.equal({ id: 2, brand: 'Dell', model: 'XPS 14', price: 1200 });
        });

        it('should return the cheapest item in the phones category', () => {
            const cheapestPhone = findCheapestItem(testInventory2, 'phones');
            expect(cheapestPhone).to.deep.equal({ id: 3, brand: 'Google', model: 'Pixel 5', price: 600 });
        });
    });

    describe('findExpensiveItems', () => {
        it('should return items more expensive than the threshold', () => {
            const expensiveItems = findExpensiveItems(testInventory2, 800);
            expect(expensiveItems).to.have.deep.members([
                { id: 1, brand: 'Apple', model: 'MacBook Pro', price: 2000 },
                { id: 2, brand: 'Dell', model: 'XPS 14', price: 1200 },
                { id: 3, brand: 'HP', model: 'Spectre x360', price: 1300 },
                { id: 4, brand: 'Lenovo', model: 'ThinkPad X2', price: 1900 },
                { id: 5, brand: 'Asus', model: 'ZenBook 2', price: 1600 },
                { id: 1, brand: 'Apple', model: 'iPhone 12', price: 1000 },
                { id: 4, brand: 'OnePlus', model: '8 Pro', price: 900 }
            ]);
        });
    });
});
