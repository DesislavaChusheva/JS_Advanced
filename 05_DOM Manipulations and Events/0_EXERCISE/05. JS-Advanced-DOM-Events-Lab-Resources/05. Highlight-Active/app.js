function focused() {
    let sectionElements = document.querySelectorAll('input');

    for (const el of sectionElements) {
        el.addEventListener('focus', function (e) {e.target.parentNode.className = 'focused'});
        el.addEventListener('blur', function (e) {e.target.parentNode.className = ''});
    }

}