function subtract() {
    let firstNumberElement = document.getElementById('firstNumber').value;
    let secondNumberElement = document.getElementById('secondNumber').value;
    document.getElementById('result').textContent = Number(firstNumberElement) - Number(secondNumberElement);
}