function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let selectElement = document.getElementById('menu');

    let text = textElement.value;
    let value = valueElement.value;

    let newOption = document.createElement('option')
    newOption.textContent = text;
    newOption.value = value;

    selectElement.appendChild(newOption);
    textElement.value = '';
    valueElement.value = '';
}