
/*fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
}
})
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    
  })
  .catch((error) => console.log("Error!! " + error)); */


  /* NON REFRESHARE LA PAGINA INDEX PER FAVORE ABBI PIETà DI NOI*/
  
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






 fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
}
})
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    
  })
  .catch((error) => console.log("Error!! " + error)); 

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
            <h5 class="card-title">Marca: ${product.name}</h5>
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

        

    // Aggiungi un gestore di eventi per il click del pulsante di eliminazione
    let deleteButton = card.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        // Chiama la funzione per eliminare l'elemento
        deleteProduct(product._id);
    });

    // Aggiungi un gestore di eventi per il click del pulsante di invio
    let sendButton = card.querySelector('.send-btn');
    sendButton.addEventListener('click', () => {
        // Chiama la funzione per inviare la card
        sendProductToHomepage(product);
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
            <h5 class="card-title">Marca: ${product.name}</h5>
            <p class="card-text">Description: ${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Brand: ${product.brand}</p>
            <span class="d-none">${product._id}</span>
            <div class="d-flex justify-content-around"">
                <button class="btn btn-success send-btn">Description</button>
            </div>
        </div>`;
        
        return card;
}

function sendProductToHomepage(product) {
    // Costruisci l'URL con i parametri della card, incluso l'URL dell'immagine
    const url = `index.html?name=${encodeURIComponent(product.name)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&brand=${encodeURIComponent(product.brand)}&imageUrl=${encodeURIComponent(product.imageUrl)}`;

    // Naviga alla pagina index con l'URL costruito
    window.location.href = url;
}


/* document.addEventListener('DOMContentLoaded', () => {
    // Recupera i parametri dell'URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const description = urlParams.get('description');
    const price = urlParams.get('price');
    const brand = urlParams.get('brand');
    const imageUrl = urlParams.get('imageUrl');

    if (name && description && price && brand && imageUrl) {
        // Utilizza i dati come desiderato
        console.log('Name:', name);
        console.log('Description:', description);
        console.log('Price:', price);
        console.log('Brand:', brand);
        console.log('Image URL:', imageUrl);

        // Puoi ora appendere i dati nella pagina come preferisci
        // Ad esempio, puoi creare una nuova card e aggiungerla a un elemento sulla pagina
        const cardContainer = document.querySelector('#sentCardContainer');
        const newCard = createCardIndex({ name, description, price, brand, imageUrl });
        cardContainer.appendChild(newCard);
    }
}); */





    function deleteProduct(productId) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
            }
        })
        .then(response => {
            if (response.ok) {
                // Rimuovi la card dal DOM dopo l'eliminazione
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
         console.log(Url);
         window.open(Url);
       }
    })
}

