function addItem() {
    let text = document.querySelector('#newItemText').value;
    let list = document.querySelector('#items');

    if (text.length === 0) return;

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text));

    let removeEl = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    removeEl.appendChild(linkText);
    removeEl.href = '#';
    removeEl.addEventListener('click', deleteItem);

    li.appendChild(removeEl);
    list.appendChild(li);


    function deleteItem() {
        li.remove();
    }
    
    document.querySelector('#newItemText').value = '';
}