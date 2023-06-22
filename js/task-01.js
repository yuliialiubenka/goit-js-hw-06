const numberOfCategories = document.querySelectorAll("#categories .item").length;
const animalsCount = document.querySelectorAll("#categories .item:nth-child(1) li").length;
const productsCount = document.querySelectorAll("#categories .item:nth-child(2) li").length;
const technologiesCount = document.querySelectorAll("#categories .item:nth-child(3) li").length;

console.log(`Number of categories: ${numberOfCategories}`);
console.log(`Category: Animals Elements: ${animalsCount}`);
console.log(`Category: Products Elements: ${productsCount}`);
console.log(`Category: Products Technologies: ${technologiesCount}`);