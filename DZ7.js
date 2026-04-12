var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",

price: function() {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] !== "function") {
            let currentPrice = parseFloat(this[key]);
            if (!isNaN(currentPrice)) {
                total += currentPrice;
            }
        }
    }
    return total;
},

minPrice: function() {
    let min = Infinity;
    for (let key in this) {
        if (typeof this[key] !== "function") {
            let currentPrice = parseFloat(this[key]);
            if (!isNaN(currentPrice)) {
                min = (currentPrice < min) ? currentPrice : min;
            }
        }
    }
    return min;
},

maxPrice: function() {
    let max = -Infinity;
    for (let key in this) {
        if (typeof this[key] !== "function") {
            let currentPrice = parseFloat(this[key]);
            if (!isNaN(currentPrice)) {
                max = (currentPrice > max) ? currentPrice : max;
            }
        }
    }
    return max;
}
};

services["Розбити скло"] = "200 грн";
//services["Фарбування"] = "500 грн";

console.log ("Загальна вартість: " + services.price() + " грн");
console.log ("Мінімальна ціна: " + services.minPrice() + " грн");
console.log ("Максимальна ціна: " + services.maxPrice() + " грн");