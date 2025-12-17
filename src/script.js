let buttons = document.querySelectorAll('.button');
let btnSubmit = document.getElementById('buttonSubmit');
let selectedValue = null

let card = document.querySelector('.card');
let modal = document.querySelector('.modalSuccess');
let divSelected = document.querySelector('.divSelected');

function Active(btn) {
    buttons.forEach(button => {
        button.classList.remove('active')
    })
    btn.classList.add('active')
    selectedValue = btn.textContent;
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        Active(button)
    })
});

btnSubmit.addEventListener('click', () => {
    if (!selectedValue) {
        alert('Please select a rating!');
        return;
    }

    divSelected.textContent = `You selected ${selectedValue} out of 5`;

    card.style.display = 'none';
    modal.style.display = 'flex';
})