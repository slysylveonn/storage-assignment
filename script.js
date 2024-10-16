let name = document.getElementById('name-entry');
let save = document.getElementById('save-btn');
let clear = document.getElementById('clear-btn'); 


save.addEventListener("click", function (event) {
    event.preventDefault();
    let nameInput = name.value;
    if (nameInput) {
        localStorage.setItem('name', nameInput);
        displayData();
    }
});

clear.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear(); 
    displayData();
});


function displayData() {
    const displayName = document.getElementById('display-name');
    const nameSaved = localStorage.getItem('name');
    if (nameSaved) {
        displayName.textContent = `Hello, ${nameSaved}!`;
    } else {
        displayName.textContent = 'No name in Storage';
    }
}
