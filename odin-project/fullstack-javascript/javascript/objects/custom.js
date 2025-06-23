function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {

    let readyet = (this.read) ? 'read!' : 'not read yet'
    let out = '';
    out = console.log(
      this.title + ' by ' + 
      this.author + ', ' + 
      this.pages + ' pages, ' + 
      readyet
    );
    return(out)
  }
}

const Hobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(Hobbit.info())
