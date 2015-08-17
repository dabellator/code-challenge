// create Book Object
// include title and author
// include methods to add and remove
var Book = (function () {

    var Book = function (title, author, shelf) {
          
        this.title = title;
        this.author = author;

        if (arguments.length === 3) {
            this.shelfBook(shelf);
        }
    };

    Book.prototype.shelfBook = function (shelf) {
          
        shelf.books.push(this);
    };

    Book.prototype.unshelfBook = function () {
          
        shelf = libDB.findCurrentShelf(this);
        shelf.books.splice(shelf.books.indexOf(this), 1);
    };
    return Book;
})();
