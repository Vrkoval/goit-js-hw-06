const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList=document.querySelector('#ingredients');
console.log(ingredients);
 const test=ingredients.map((ingredient)=>{
  const ingredientsItem=document.createElement("li");
  ingredientsItem.classList.add("item");
  
   ingredientsItem.textContent=`${ingredient}`;
  return ingredientsItem;
})

ingredientsList.append(...test);