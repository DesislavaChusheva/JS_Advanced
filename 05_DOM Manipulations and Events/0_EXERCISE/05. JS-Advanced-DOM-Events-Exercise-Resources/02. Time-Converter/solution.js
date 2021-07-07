function attachEventsListeners() {

    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', daysConverter);
    hoursButton.addEventListener('click', hoursConverter);
    minutesButton.addEventListener('click', minutesConverter);
    secondsButton.addEventListener('click', secondsConverter);

    function daysConverter(e) {
        let inputTime = document.querySelector('#days').value;
        let hours = inputTime * 24;
        let minutes = inputTime * 1440;
        let seconds = inputTime * 86400;
        document.querySelector('#hours').value = hours;
        document.querySelector('#minutes').value = minutes;
        document.querySelector('#seconds').value = seconds;
    }
    function hoursConverter(e) {
        let inputTime = document.querySelector('#hours').value;
        let days = inputTime / 24;
        let minutes = inputTime * 60;
        let seconds = inputTime * 60 * 60;
        document.querySelector('#days').value = days;
        document.querySelector('#minutes').value = minutes;
        document.querySelector('#seconds').value = seconds;
    }
    function minutesConverter(e) {
        let inputTime = document.querySelector('#minutes').value;
        let days = inputTime / (24 * 60);
        let hours = inputTime / 60;
        let seconds = inputTime * 60;
        document.querySelector('#days').value = days;
        document.querySelector('#hours').value = hours;
        document.querySelector('#seconds').value = seconds;
    }
    function secondsConverter(e) {
        let inputTime = document.querySelector('#seconds').value;
        let days = inputTime / (24 * 60 * 60);
        let hours = inputTime / (60 * 60);
        let minutes = inputTime / 60;
        document.querySelector('#days').value = days;
        document.querySelector('#hours').value = hours;
        document.querySelector('#minutes').value = minutes;
    }
}