//fontion pour ajouter un élément à l'ecran
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    console.log(expression);
    let result = eval(expression);
    document.getElementById('display').value = result;
}
