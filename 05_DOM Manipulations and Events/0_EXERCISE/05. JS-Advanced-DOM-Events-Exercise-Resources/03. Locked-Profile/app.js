function lockedProfile() {
    let buttonElements = Array.from(document.querySelectorAll('#main .profile button'));
    buttonElements.forEach(b => {
        b.addEventListener('click', previewHiddenInfo);
    });

    function previewHiddenInfo(e) {
        let button = e.target;
        let user = button.parentElement;
        let radioButton = user.querySelector('input:checked');

        if (radioButton.value === 'unlock') {
            let hiddenFieldElement = button.previousElementSibling;
            hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block' ? 'none' : 'block';
            button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
        }
    }

}