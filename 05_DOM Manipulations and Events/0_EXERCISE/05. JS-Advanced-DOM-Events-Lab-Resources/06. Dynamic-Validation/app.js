function validate() {

    let regex = /[a-z+A-Z]+@[a-z]+.[a-z]+/g;
    let emailElement = document.querySelector('#email');

    emailElement.addEventListener('change', Validator);

    function Validator(e){
        regex.test(e.target.value) ? e.target.classList.remove('error') : e.target.classList.add('error');
    }

}