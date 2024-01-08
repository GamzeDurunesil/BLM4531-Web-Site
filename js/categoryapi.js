const categoryContainer = document.querySelector('.category-container');



fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>{
    return res.json();
})
.then(data=>{
    
    data.categories.forEach(cat=> {
        const markup=`
        <div class="catrecipe"> <img src="${cat.strCategoryThumb}">
        <h3>${cat.strCategory}  </h3>
        <button type="submit" onclick="redirect('${cat.strCategory}.html')">View Recipes</button>
       </div>
        `

        categoryContainer.insertAdjacentHTML('beforeend',markup);
       
    });
})
.catch(error=>console.log(error));

function redirect(page) {
    window.location.assign(page);
}
   
