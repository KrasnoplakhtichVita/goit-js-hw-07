const listOfCategories = document.querySelector('#categories');

console.log('Number of categories:', [...listOfCategories.children].length);

[...listOfCategories.children].forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
