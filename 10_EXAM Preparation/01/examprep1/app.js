function solve() {

   let buttonCreateElement = document.querySelector('.btn.create');
   buttonCreateElement.addEventListener('click', CreateNewPost);

   function CreateNewPost(e) {
      e.preventDefault();

      let postsElement = document.querySelector('.site-content main section');

      let authorElement = document.getElementById('creator');
      let titleElement = document.getElementById('title');
      let categoryElement = document.getElementById('category');
      let contentElement = document.getElementById('content');

      let author = authorElement.value;
      let title = titleElement.value;
      let category = categoryElement.value;
      let content = contentElement.value;

      let arcticleElement = document.createElement('article');

      let postTitleElement = document.createElement('h1');
      postTitleElement.textContent = title;

      let postCategoryElement = document.createElement('p');
      postCategoryElement.textContent = 'Category: ';
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = category;
      postCategoryElement.appendChild(strongCategory);

      let postCreatorElement = document.createElement('p');
      postCreatorElement.textContent = 'Creator: ';
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = author;
      postCreatorElement.appendChild(strongCreator);

      let postContentElement = document.createElement('p');
      postContentElement.textContent = content;

      let postDivElement = document.createElement('div');
      postDivElement.classList.add('buttons');

      let deleteButtonElement = document.createElement('button');
      deleteButtonElement.classList.add('btn');
      deleteButtonElement.classList.add('delete');
      deleteButtonElement.textContent = 'Delete';
      deleteButtonElement.addEventListener('click', DeletePost);

      let archiveButtonElement = document.createElement('button');
      archiveButtonElement.classList.add('btn');
      archiveButtonElement.classList.add('archive');
      archiveButtonElement.textContent = 'Archive';
      archiveButtonElement.addEventListener('click', ArchivePost);

      postDivElement.appendChild(deleteButtonElement);
      postDivElement.appendChild(archiveButtonElement);

      arcticleElement.appendChild(postTitleElement);
      arcticleElement.appendChild(postCategoryElement);
      arcticleElement.appendChild(postCreatorElement);
      arcticleElement.appendChild(postContentElement);
      arcticleElement.appendChild(postDivElement);

      postsElement.appendChild(arcticleElement);

      authorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

   }
   function DeletePost(e) {
      e.target.parentElement.parentElement.remove();;
   }
   function ArchivePost(e) {
      let articleToArchive = e.target.parentElement.parentElement;
      let archiveListElement = document.querySelector('.archive-section ol');

      let wholeArchive = Array.from(archiveListElement.querySelectorAll('li'));
      let articleTitle = articleToArchive.querySelector('h1').textContent;

      let newLiElement = document.createElement('li');
      newLiElement.textContent = articleTitle;

      articleToArchive.remove();

      wholeArchive.push(newLiElement);
      wholeArchive.sort((a,b) => a.textContent.localeCompare(b.textContent))
                  .forEach(li => archiveListElement.appendChild(li));

   }
}
