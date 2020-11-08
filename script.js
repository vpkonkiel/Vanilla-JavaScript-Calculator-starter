const numberButtons = document.querySelectorAll('[data-number]');

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        alert(button.innerText);
    })
})

const operationButtons = document.querySelectorAll('[data-operation]');

operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        alert(button.innerText);
    })
})