
const beefContainer = document.querySelector('.beef-container');


let favoriteMealsS = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMealsS.includes(catin.strMeal);
        const showmeal=`
       <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')" src="${catin.strMealThumb}">
       <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>
        <h3  id="mealname"  name="mealname">${catin.strMeal}  </h3>
       </div>
        `
        beefContainer.insertAdjacentHTML('beforeend',showmeal);
        
    });

})
.catch(error=>console.log(error));


//chicken

const chickenContainer = document.querySelector('.chicken-container');




fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
        
       </div>
        `

        chickenContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));


//dessert

const dessertContainer = document.querySelector('.dessert-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>
        <h3>${catin.strMeal}  </h3>
       </div>
        `

        dessertContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));


//lamb

const lambContainer = document.querySelector('.lamb-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        lambContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));


//miscellaneous

const miscellaneousContainer = document.querySelector('.miscellaneous-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=miscellaneous').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        miscellaneousContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//pasta

const pastaContainer = document.querySelector('.pasta-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        pastaContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//pork

const porkContainer = document.querySelector('.pork-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=pork').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        porkContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//seafood

const seafoodContainer = document.querySelector('.seafood-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        seafoodContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//side

const sideContainer = document.querySelector('.side-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=side').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        sideContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//starter

const starterContainer = document.querySelector('.starter-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=starter').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        starterContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//vegan

const veganContainer = document.querySelector('.vegan-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        veganContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//vegetarian

const vegContainer = document.querySelector('.vegetarian-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        vegContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//breakfast

const breakfastContainer = document.querySelector('.breakfast-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        breakfastContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));

//goat

const goatContainer = document.querySelector('.goat-container');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=goat').then(resp=>{
    return resp.json();
})
.then(data=>{
    
    data.meals.forEach(catin=> {
        const isFavorite = favoriteMeals.includes(catin.strMeal);
        const showmeal=`
        <div class="catinrecipe"> <img onclick="redirectToDetails('${catin.strMeal}')"  src="${catin.strMealThumb}">
        <span class="material-icons favorite-icon${isFavorite ? ' favorite' : ''}" onclick="addfavorite('${catin.strMeal}', this)">favorite</span>

        <h3>${catin.strMeal}  </h3>
       </div>
        `

        goatContainer.insertAdjacentHTML('beforeend',showmeal);
       
    });
})
.catch(error=>console.log(error));



//resme basınca detay sayfasına gitme fonksiyonu
function redirectToDetails(mealName) {
    selectedMealName = mealName; // Store the selected meal name
    window.location.href = `details.html?meal=${selectedMealName}`;
}


// favorilere ekleme fonskiyonu
function addfavorite(mealName) {
    if (!favoriteMealsS.includes(mealName)) {
        favoriteMealsS.push(mealName);
        localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMealsS));
        console.log('Added to favorites:', mealName);


        
        // Add 'favorite' class to the clicked icon
        icon.classList.add('favorite');
    } else {
        console.log('Meal already in favorites:', mealName);
        alert('Meal already in favorites.');
    }
}
