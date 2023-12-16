document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    let idCard = searchParams.get('id');
    fetch(`https://striveschool-api.herokuapp.com/api/product/${idCard}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
        },
    })
    .then(response => response.json())
    .then(products => {
        console.log(products)
        createCard(products)
        
    })
})


function createCard(x) {
    let products = x
    console.log(products)
    let cardPadre = document.querySelector('.container');
        let card = document.createElement('div');
        card.className = 'card mb-3" style="max-width: 540px;'
        card.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${products.imageUrl}" class="img-fluid rounded-start" alt="${products.name}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${products.name}</h5>
            <p class="card-text">${products.brand}</p>
            <p class="card-text">${products.description}</p>
            <p class="card-text"><small class="text-body-secondary">$${products.price}</p>
            </div>
        </div> 
        </div>
            `;
            cardPadre.appendChild(card);
}