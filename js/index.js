
const myLibrary = [];

let exampleBook = new Book('This is an example book', 'Example Author', 15, false);

myLibrary.push(exampleBook);

function Book(title, author, numOfPages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
  this.iD = self.crypto.randomUUID();
};

function addBookToLibrary(title, author, numOfPages, readStatus) {
  // take parms, create a book then store it in the array.
  let book = new Book(title, author, numOfPages, readStatus);
  myLibrary.push(book);
}

function displayBooks() {
  const bookshelf = document.querySelector('.bookshelf');
  console.log(bookshelf);
  
  myLibrary.forEach(book => {
    const template = document.createElement("template");
    let bookString =`
      <div class="book">
        <h1>${book.title}</h1>
        <h2>${book.author}</h2>
        <h3>${book.numOfPages} of pages </h3>
        <br>
        <p>${book.readStatus ? 'Read' : 'Not Read'}</p>
      </div>
    `;
    template.innerHTML = bookString.trim();
    
    bookshelf.appendChild(template.content.firstElementChild);
  });
}



addBookToLibrary('test', 'test2', 3, true);

console.log(myLibrary);

displayBooks();