// Inventory Tracker Lab

// 1. Create the inventory variable here
const inventory = {
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
}

// 2. Create the function getTotalInventoryValue() here
function getTotalInventoryValue(inventoryData) {
    // Initialize variables for total and the two while loops
    let total = 0;
    let i = 0;
    let j = 0;

    // Check if the inventoryData has computers
    // checking the length of a property that potentially doesn't exist
    // will throw an error, so we need to check if it exists first
    if (inventoryData.computers && inventoryData.computers.length) {
        // Loop through the computers array and add the price to the total
        while (i < inventoryData.computers.length) {
            total += inventoryData.computers[i].price;
            // Increment the counter - DON'T FORGET THIS!
            i++;
        }
    }

    // the logic is the same for phones but there is a way to refactor this repetition
    // with a different kind of loop that we will learn later on in the course
    if (inventoryData.phones && inventoryData.phones.length) {
        while (j < inventoryData.phones.length) {
            total += inventoryData.phones[j].price;
            j++;
        }
    }

    return total;
}

// 3. Create the function findCheapestItem() here
function findCheapestItem(inventoryData, category) {
    // Initialize variables for the cheapest item and price along with loop counter
    let cheapestItem = null;
    let cheapestPrice = Infinity;
    let i = 0;

    // Check if the inventoryData has computers
    if (inventoryData[category] && inventoryData[category].length) {
        // Loop through the computers array
        while (i < inventoryData[category].length) {
            // Check if the current item is cheaper than the current cheapest item
            if (inventoryData[category][i].price < cheapestPrice) {
                // If it is, update the cheapest price and item
                cheapestPrice = inventoryData[category][i].price;
                cheapestItem = inventoryData[category][i];
            }
            // Increment the counter
            i++;
        }
    }

    // Return the cheapest item
    return cheapestItem;
}

// 4. Create the function findExpensiveItems() here
function findExpensiveItems(inventoryData) {
    // Initialize an array to hold the expensive items along with loop counters
    let expensiveItems = [];
    let i = 0;
    let j = 0;

    // Check if the inventoryData has computers
    if (inventoryData.computers && inventoryData.computers.length) {
        // Loop through the computers array
        while (i < inventoryData.computers.length) {
            // Check if the current item is more expensive than the threshold
            if (inventoryData.computers[i].price > 800) {
                // If it is, add it to the expensive items array
                expensiveItems.push(inventoryData.computers[i]);
            }
            i++;
        }
    }

    // same idea as above
    if (inventoryData.phones && inventoryData.phones.length) {
        while (j < inventoryData.phones.length) {
            if (inventoryData.phones[j].price > 800) {
                expensiveItems.push(inventoryData.phones[j]);
            }
            j++;
        }
    }

    // Return the expensive items
    return expensiveItems;
}
