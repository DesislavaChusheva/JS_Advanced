function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = Array.from(document.querySelectorAll('.container tbody tr'));
      let searched = document.getElementById('searchField').value;
      table.forEach(r => r.className = '');
      for (const row of table) {
         let cols = Array.from(row.children);
         for (const col of cols) {
            if (col.textContent.includes(searched)) {
               row.className = 'select';
            }
         }
      }

   }
}