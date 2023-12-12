/* 
fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDIzNzk1NDIsImV4cCI6MTcwMzU4OTE0Mn0.d8QkvVHhCkTOnICqhbRveiPBpo-KXpuPo1gn473RwKc"
}
})
.then(response => response.json())
.then (json => console.log(json)) */


function addProduct() {
    let button = document.querySelector('div.container btn btn-primary mt-5');
    button.addEventListener('click', (e) => {
        let form = document.createElement('form');
        form.innerHTML = `
        <div class="mt-2">
            <label for="text1" class="form-label">Add name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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
            <input type="file" class="form-control" id="text4">
            </div>
            <div class="">
            <label for="text5" class="form-label">Add price</label>
            <input type="text" class="form-control" id="text5">
        </div>
        <button type="button" class="btn btn-primary mt-3">Submit</button>`

        let formInput= document.querySelector('#formInput');
        formInput.appendChild(form);
    })
}

addProduct()