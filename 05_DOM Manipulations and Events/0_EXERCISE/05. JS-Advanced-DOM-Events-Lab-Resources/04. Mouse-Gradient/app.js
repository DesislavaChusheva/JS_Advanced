function attachGradientEvents() {
    let gradientElement = document.querySelector('#gradient');
    let resultElement = document.querySelector('#result');

    gradientElement.addEventListener('mousemove', GradientPercent);
    gradientElement.addEventListener('mouseout', function(){resultElement.textContent = ''});

    function GradientPercent(e) {
        let power = Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100);
        resultElement.textContent = `${power}%`;
    }
}