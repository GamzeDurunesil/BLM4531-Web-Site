const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');


let favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];


//get recipes
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2 >Fetching Recipes...</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query }`);
    const response = await data.json();

    recipeContainer.innerHTML = "";

    response.meals.forEach(meal => {
        
        //console.log(meal);
        const recipeDiv = document.createElement('div');
       
        recipeDiv.classList.add('recipe');
        const isFavorite = favoriteMeals.includes(meal.strMeal);

        if (meal.strMealThumb!=null) {

    recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${meal.strMeal}', this)">favorite</span>

        <h3>${meal.strMeal}  </h3>
        <p>${meal.strArea} </p>
        <p>${meal.strCategory} </p>

        `
        }
       
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        if (meal.strMealThumb != null) {
    recipeDiv.appendChild(button);
        }

        /* adding eventlistener to recipe button*/

        button.addEventListener('click', () => {
            if (meal.strMealThumb!=null) {
    openRecipePopUp(meal);
            }
        });


        if (meal.strMealThumb!=null) {
    recipeContainer.appendChild(recipeDiv);
        }
    });
    //console.log(response.meals[0]);
    
}

//malzeme ve ölçü fonksiyonu

const fetchIngredients = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientsList = ingredientsList + `<li>${measure} ${ingredient}</li>`
        }
        else {
            break;
        }
    }
    return ingredientsList;
   

}



//tarif kutusu
const openRecipePopUp = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        
        <h4>Malzemeler</h4>
        <ul class="ingredientList">${fetchIngredients(meal)}</ul>
        <div>
            <h4>Direktifler</h4>
            <p class="recipeInstructions">${meal.strInstructions}</p>
        
        </div>
    
    `
    
    recipeDetailsContent.parentElement.style.display = "block";


}

//popup kapatma butonu

recipeCloseBtn.addEventListener('click', () => {

    recipeDetailsContent.parentElement.style.display = "none";
})


//tarifleri sıralama

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);

    //console.log("Button Clicked");

});



function addfavorite(mealName) {
    if (!favoriteMeals.includes(mealName)) {
        favoriteMeals.push(mealName);
        localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
        console.log('Added to favorites:', mealName);


        
        // Add 'favorite' class to the clicked icon
        icon.classList.add('favorite');
    } else {
        console.log('Meal already in favorites:', mealName);
        alert('Meal already in favorites.');
    }
}

