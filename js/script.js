document.addEventListener('DOMContentLoaded', () => {
        if (window.location.pathname.includes('back-office.html')) {
            addProduct();
            fetchProducts();
        } else if (window.location.pathname.includes('index.html')) {
            fetchDataAndAppend();
        }
        detailsCard()
    });

function fetchDataAndAppend() {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
        },
    })
    .then(response => response.json())
    .then(products => {
        appendDataToIndex(products);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function appendDataToIndex(products) {
    let cardContainer = document.querySelector('#sentCardContainer');
    cardContainer.innerHTML = '';

    products.forEach(product => {
        let card = createCardIndex(product);
        cardContainer.appendChild(card);
    });
}

function addProduct() {
    let button = document.querySelector('#btn');
    if (button) {
        button.addEventListener('click', () => {
            let form = document.createElement('form');
            form.setAttribute('id', 'editForm');
            form.innerHTML = `
                <div class="mt-2">
                    <label for="text1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="text1">
                </div>
                <div class="">
                    <label for="text2" class="form-label">Description</label>
                    <input type="text" class="form-control" id="text2">
                </div>
                <div class="">
                    <label for="text3" class="form-label">Brand</label>
                    <input type="text" class="form-control" id="text3">
                </div>
                <div class="">
                    <label for="text4" class="form-label">Image</label>
                    <input type="text" class="form-control" id="text4">
                </div>
                <div class="">
                    <label for="text5" class="form-label">Price</label>
                    <input type="text" class="form-control" id="text5">
                </div>
                <button type="submit" id='submit' class="btn btn-primary mt-3">Submit</button>`;

            let formInput = document.querySelector('#formInput');
            formInput.appendChild(form);

            form.addEventListener('submit', function(e){
                e.preventDefault();

                let name = document.querySelector('#text1').value;
                let description = document.querySelector('#text2').value;
                let brand = document.querySelector('#text3').value;
                let imageUrl = document.querySelector('#text4').value;
                let price = document.querySelector('#text5').value;

                let data = {
                    "name": name,
                    "description": description,
                    "price": price,
                    "imageUrl": imageUrl,
                    "brand": brand
                }; 

                fetch('https://striveschool-api.herokuapp.com/api/product/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Risposta dal server:', data);
                    clearForm();
                    form.remove();
                    fetchProducts();
                })
                .catch((error) => {
                    console.error('Errore durante la richiesta:', error);
                });
            });
        });
    }
}






/*  fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
}
})
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    
  })
  .catch((error) => console.log("Error!! " + error));  */

  function fetchProducts() {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
        },
    })
    .then(response => response.json())
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.error('Errore durante la richiesta GET:', error);
    });
}

function displayProducts(products) {
    let cardContainer = document.querySelector('#cardContainer');
    cardContainer.innerHTML = '';

    products.forEach(product => {
        let card = createProductCard(product);
        cardContainer.appendChild(card);
    });
}

function createProductCard(product) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-title">Modello: ${product.name}</h5>
            <p class="card-text">Description: ${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Brand: ${product.brand}</p>
            <span class="d-none">${product._id}</span>
            <div class="d-flex flex-column">
                <button class="btn btn-danger delete-btn">Delete</button>
                <button class="btn btn-success send-btn my-2">Send</button>
                <button class="btn btn-primary edit-btn">Edit</button>
            <div>
        </div>`;
        
    
    let deleteButton = card.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        deleteProduct(product._id);
    });

    
    let sendButton = card.querySelector('.send-btn');
    sendButton.addEventListener('click', () => {
        sendProductToHomepage(product);
    });

    let editButton = card.querySelector('.edit-btn');
    editButton.addEventListener('click', () => {
        enableEdit(product);
    });

    return card;
}

function createCardIndex(product) {
    console.log(product);
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-title">Modello: ${product.name}</h5>
            <p class="card-text">Caratteristiche: ${product.description}</p>
            <p class="card-text">Prezzo: $${product.price}</p>
            <p class="card-text">Brand: ${product.brand}</p>
            <span class="d-none">${product._id}</span>
            <div class="d-flex justify-content-around"">
                <button class="btn btn-success send-btn">Details</button>
            </div>
        </div>`;
        
        return card;
}

function sendProductToHomepage(product) {
    const url = `index.html?name=${encodeURIComponent(product.name)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&brand=${encodeURIComponent(product.brand)}&imageUrl=${encodeURIComponent(product.imageUrl)}`;
    window.location.href = url;
}

    function deleteProduct(productId) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
            }
        })
        .then(response => {
            if (response.ok) {
                let deletedCard = document.querySelector(`[data-product-id="${productId}"]`);
                if (deletedCard) {
                    deletedCard.remove();
                }
                fetchProducts();
            } else {
                console.error('Errore durante l\'eliminazione dell\'elemento');
            }
        })
        .catch(error => {
            console.error('Errore durante la richiesta DELETE:', error);
        });
    }

function clearForm() {
    document.querySelector('#text1').value = '';
    document.querySelector('#text2').value = '';
    document.querySelector('#text3').value = '';
    document.querySelector('#text4').value = '';
    document.querySelector('#text5').value = '';
}

function detailsCard() {
    let detailsButton = document.querySelector("#sentCardContainer")
    detailsButton.addEventListener('click',(e)=>{
       if (e.target.classList.value === 'btn btn-success send-btn') {
        let idCards = e.target.parentNode.parentNode.childNodes[9].innerText;
         let Url = 'dettaglio.html?id=' + idCards;
         window.open(Url);
       }
    })
} 

function enableEdit(product) {
    let form = document.createElement('form');
    form.setAttribute('id', 'editForm');
    form.innerHTML = `
        <div class="mt-2">
            <label for="text1" class="form-label">Name</label>
            <input type="text" class="form-control" id="text1" value="${product.name}">
        </div>
        <div class="">
            <label for="text2" class="form-label">Description</label>
            <input type="text" class="form-control" id="text2" value="${product.description}">
        </div>
        <div class="">
            <label for="text3" class="form-label">Brand</label>
            <input type="text" class="form-control" id="text3" value="${product.brand}">
        </div>
        <div class="">
            <label for="text4" class="form-label">Image</label>
            <input type="text" class="form-control" id="text4" value="${product.imageUrl}">
        </div>
        <div class="">
            <label for="text5" class="form-label">Price</label>
            <input type="text" class="form-control" id="text5" value="${product.price}">
        </div>
        <button type="button" id='update' class="btn btn-primary mt-3">Update</button>`;

    let formInput = document.querySelector('#formInput');
    formInput.innerHTML = '';
    formInput.appendChild(form);

    
    let updateButton = form.querySelector('#update');
    updateButton.addEventListener('click', () => {
        updateProduct(product._id, {
            name: document.querySelector('#text1').value,
            description: document.querySelector('#text2').value,
            brand: document.querySelector('#text3').value,
            imageUrl: document.querySelector('#text4').value,
            price: document.querySelector('#text5').value,
        });
    });
}

function updateProduct(productId, updatedData) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
        },
        body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Product updated:', data);
        fetchProducts(); 
        clearForm();
    })
    .catch(error => {
        console.error('Error updating product:', error);
    });
}