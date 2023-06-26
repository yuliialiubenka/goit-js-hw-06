const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categorie => {
    console.log(`Category: ${categorie.firstElementChild.textContent}\nElements: ${categorie.lastElementChild.children.length}`);
});