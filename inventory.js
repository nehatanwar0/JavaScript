
console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get product details from user
let productName = prompt("Enter new product name:");
let productPrice = Number(prompt("Enter product price:"));

// Validate input
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid input. Please enter a valid product.");
} else {

    // Function to assign product category
    function getCategory(price) {
        if (price < 50) {
            return "Budget";
        } else if (price < 200) {
            return "Standard";
        } else {
            return "Premium";
        }
    }

    // Switch example for category badges
    function getBadge(category) {
        switch (category) {
            case "Budget":
                return "[BUDGET]";
            case "Standard":
                return "[STANDARD]";
            case "Premium":
                return "[PREMIUM]";
            default:
                return "[UNKNOWN]";
        }
    }

    // Add new product
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log("--- Processing Inventory Roster (forEach) ---");

    inventory.forEach(function(item) {
        const category = getCategory(item.price);
        const badge = getBadge(category);

        console.log(
            "* Item: " + item.name +
            " ($" + item.price +
            ") -> Category: " + category +
            " " + badge
        );
    });

    // Regular function: total inventory value
    function calculateTotal(items) {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].price <= 0) {
                continue;
            }

            total += items[i].price;
        }

        return total;
    }

    // Arrow function: discounted price
    const applyDiscount = (price, discount = 0) => {
        return price - (price * discount / 100);
    };

    console.log("--- Financial Analytics ---");

    console.log(
        "Total Inventory Value: $" +
        calculateTotal(inventory)
    );

    const affordable = inventory.filter(
        item => item.price < 200
    );

    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordable.map(item => item.name))
    );

    const report = inventory.map(
        item => item.name.toUpperCase() + ": $" + item.price
    );

    console.log("Formatted Report List:", JSON.stringify(report));

    console.log(
        "Laptop after 10% discount: $" +
        applyDiscount(800, 10)
    );
}