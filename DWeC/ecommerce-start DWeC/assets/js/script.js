// State
let state = {
    products: [],
    filteredProducts: [],
    scoreFilteredProducts: [],
    favorites: []
};

function loadState(){
    const stateStorage = localStorage.getItem("state");
    if (stateStorage){
        state = JSON.parse(stateStorage);
    }
}

function saveState(){
    localStorage.setItem("state",JSON.stringify(state)); 
}

async function loadProducts(){
    try{
        const response = await fetch("./assets/json/products.json");
        const data = await response.json();

        state.products = data;
        state.filteredProducts = [...data];
        state.scoreFilteredProducts = [...data];
        loadState();

        renderProducts(state.products);
    }catch (error){
        alert(error);
    }
}


function renderProducts(products){
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = "";

    for(let product of products){
        const isFavorite = state.favorites.includes(product.id);
        const reducedPrice = (product.preu * (1 - product.descompte)).toFixed(2);
        const productCard = `
          <article class="card">
          <div class="info-1">
            <img src="${product.imatge}" alt="${product.nom}">
            <h3>${product.nom}</h3>
            <h4>${product.descripcio}</h4>
        <div class="info2">
            <div class="showcase-rating">
                <i class="${product.puntuacio > 0?"fa-solid fa-star": "fa-solid fa-star grey-star"}"></i>
                <i class="${product.puntuacio > 1?"fa-solid fa-star": "fa-solid fa-star grey-star"}"></i>
                <i class="${product.puntuacio > 2?"fa-solid fa-star": "fa-solid fa-star grey-star"}"></i>
                <i class="${product.puntuacio > 3?"fa-solid fa-star": "fa-solid fa-star grey-star"}"></i>
                <i class="${product.puntuacio > 4?"fa-solid fa-star": "fa-solid fa-star grey-star"}"></i>
        </div>
          </div>
            <div class="price-box">
              <p class="price">${reducedPrice} € ${product.descompte?`<del>${product.preu} €</del>`:""} </p>
              <button>Add</button>
            </div>
          </div>
          <div class="favorite">
              <i class="fa-${isFavorite?'solid':'regular'} fa-heart" data-id="${product.id}"></i>
          </div>
        </article>
        `;
        productGrid.innerHTML += productCard;
    }

    // Attach event listeners to favorite icons
    document.querySelectorAll('.favorite').forEach(icon =>{
        icon.addEventListener('click',toggleFavorite);
    });
}

function setStarRating(event) {
    const prodID = product.id;
    const score = product.puntuacio;

    const product = state.products;


}




function filterByScore(score){
    if(score == "Tot"){
        scoreFilteredProducts = [...state.products];
        return (state.filteredProducts = [...state.products]);
    } else{
        state.filteredProducts = state.products.filter(product => product.puntuacio == Number(score));
        scoreFilteredProducts = [...state.filteredProducts];
        return state.filteredProducts;
    }
}

function toggleFavorite(event){
    const productId = Number(event.target.dataset.id);
    const index = state.favorites.indexOf(productId);

    if(index == -1){
        state.favorites.push(productId);
    }
    else{
        state.favorites.splice(index,1);
    }
    saveState();
    renderProducts(state.filteredProducts);
}

function searchDescription(){
    const productGrid = document.querySelector(".product-grid");
    const search = document.querySelector(".search-container input");
    state.filteredProducts = state.scoreFilteredProducts.filter(product => product.descripcio.toLowerCase().includes(search.value.toLowerCase()));

    if(state.filteredProducts.length == 0){
        productGrid.innerHTML = "There are no products that meet your search criteria."
    }else{
        renderProducts(state.filteredProducts);
    }
}

/// Show all favorites
function showFavorites(){
    state.filteredProducts = state.products.filter(product => state.favorites.includes(product.id));
    renderProducts(state.filteredProducts);
}

/// Shows all non-favorites
function showNonFavorites(){
    state.filteredProducts = state.products.filter(product => !state.favorites.includes(product.id));
    renderProducts(state.filteredProducts);
}

// Reset all
function resetAll(){    
    state.filteredProducts = [...state.products];
    state.scoreFilteredProducts = [...state.products];
    state.favorites = [];
    renderProducts(state.filteredProducts);
}

function init(){
    document.querySelectorAll('.main-nav a').forEach(boto =>{
        boto.addEventListener('click',event =>{
            event.preventDefault();
            const score = event.target.textContent;
            const filteredProducts = filterByScore(score);
            renderProducts(filteredProducts);
        });
    });

    document.querySelector(".icons-container .fa-solid.fa-heart").addEventListener('click',showFavorites);
    document.querySelector(".icons-container .fa-regular.fa-heart").addEventListener('click',showNonFavorites);
    document.querySelector(".fa-eraser").addEventListener('click',resetAll);

    document.querySelector(".search-container").addEventListener('keyup',searchDescription);


    loadProducts();
}

document.addEventListener("DOMContentLoaded",init);