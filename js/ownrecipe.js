
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const button = document.querySelector('.button');

button.addEventListener('click',()=>{
    onSnapshot(ref,(snapshot)=>{
            
    
        snapshot.docs.forEach(doc =>{
            const recipe = doc.data();
            
            recipeDetailsContent = `
            <h2 class="recipeName">${recipe.name}</h2>
            <h4>Malzemeler</h4>
            <ul class="ingredientList">${recipe.ingredients}</ul>
            <div>
                <h4>Direktifler</h4>
                <p class="recipeInstructions">${recipe.description}</p>
            
            </div>
            `


           
        
        
    });
    
        
    recipeDetailsContent.parentElement.style.display = "block";
       

        
                        

    
        
    });
    
})

/*
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const openRecipePopUp = async(recipe) => {
    
    
    
    const data = await ref.get();
    let template = '';
    data.docs.forEach(doc =>{
        const recipe = doc.data();
        template += `
        <h2 class="recipeName">${recipe.name}</h2>
        <h4>Malzemeler</h4>
        <ul class="ingredientList">${recipe.ingredients}}</ul>
        <div>
            <h4>Direktifler</h4>
            <p class="recipeInstructions">${recipe.description}}</p>
        
        </div>
        `

    });
     
    recipeDetailsContent.innerHTML += template;
    

recipeDetailsContent.parentElement.style.display = "block";


}*/