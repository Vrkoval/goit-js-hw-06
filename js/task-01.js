const categoriesCount=document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesCount.length}`);
console.log("");

// const allItemList = document.querySelectorAll(".item");
// console.log(`Number of categories: ${allItemList.length}`);
categoriesCount.forEach((item)=>{
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
// //   пробел
 console.log("");


});
