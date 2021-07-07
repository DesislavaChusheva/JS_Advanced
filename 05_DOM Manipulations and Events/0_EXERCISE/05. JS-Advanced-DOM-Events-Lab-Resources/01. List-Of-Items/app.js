function addItem() {
   let text = document.querySelector('#newItemText').value;
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(text));
   document.querySelector('#items').appendChild(li);
   document.querySelector('#newItemText').value = '';
}