function deleteByEmail() {
    let tableEmails = document.querySelectorAll('table tbody tr td:nth-child(2)');
    let elementToDelete = document.querySelector('input').value;
    let resultElement = document.querySelector('#result');

    for (const td of tableEmails) {
        if (td.textContent === elementToDelete) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            resultElement.textContent = 'Deleted!';
            return;
        }
        resultElement.textContent = 'Not found.';
    }

}