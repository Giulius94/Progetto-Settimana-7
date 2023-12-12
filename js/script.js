
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

    document.addEventListener('DOMContentLoaded', () => {
        function addProduct() {
            let button = document.querySelector('#btn');
            if (button) {
                button.addEventListener('click', () => {
                    let form = document.createElement('form');
                    form.innerHTML = `
                    <div class="mt-2">
                        <label for="text1" class="form-label">Add name</label>
                        <input type="text" class="form-control" id="text1">
                    </div>
                    <div class="">
                        <label for="text2" class="form-label">Add description</label>
                        <input type="text" class="form-control" id="text2">
                    </div>
                    <div class="">
                        <label for="text3" class="form-label">Add Brand</label>
                        <input type="text" class="form-control" id="text3">
                    </div>
                    <div class="">
                        <label for="text4" class="form-label">Add imageUrl</label>
                        <input type="text" class="form-control" id="text4">
                    </div>
                    <div class="">
                        <label for="text5" class="form-label">Add price</label>
                        <input type="text" class="form-control" id="text5">
                    </div>
                    <button type="submit" id='submit' class="btn btn-primary mt-3">Submit</button>`

                    let formInput = document.querySelector('#formInput');
                    formInput.appendChild(form);

                    form.addEventListener('submit', function(e){
                        e.preventDefault();

                        let nome = document.querySelector('#text1').value;
                        let description = document.querySelector('#text2').value;
                        let brand = document.querySelector('#text3').value;
                        let imageUrl = document.querySelector('#text4').value;
                        let price = document.querySelector('#text5').value;

                        let dataObject = {
                            "name": nome,
                            "description": description,
                            "price": price,
                            "imageUrl": imageUrl,
                            "brand": brand
                        };
                        
                        let dataJson = JSON.stringify(dataObject);
                        console.log(dataJson);

                        fetch('https://striveschool-api.herokuapp.com/api/product', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc",
                            },
                            body: dataJson,
                            
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Risposta dal server:', data);
                            // Pulizia dei campi del form
                            document.querySelector('#text1').value = '';
                            document.querySelector('#text2').value = '';
                            document.querySelector('#text3').value = '';
                            document.querySelector('#text4').value = '';
                            document.querySelector('#text5').value = '';

                            let card = document.createElement('div');
                            card.classList.add('card');
                            card.innerHTML = `
                            <img src="${data.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">${data.description}</p>
                                <p class="card-text">${data.brand}</p>
                                <p class="card-text">${data.price}$</p>
                            </div>
                        `;
                        
                        // Aggiungi la card al contenitore delle card esistente
                        let cardsContainer = document.querySelector('#cardsContainer');
                        cardsContainer.appendChild(card);

                        form.style.display = 'none';
                            
                        })
                        .catch((error) => {
                            console.error('Errore durante la richiesta:', error);
                            if (error.response) {
                                console.error('Dettagli della risposta:', error.response.status, error.response.data);
                            }
                        });                      
                    })
                }) 
            } 
        }addProduct();
    })

    fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
    }
    })
    .then((response) => response.json())
    .then((obj) => {
        console.log(obj);
        
    })
    .catch((error) => console.log("Error!! " + error))