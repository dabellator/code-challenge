// create Shelf Object
// include property for books array
// include methods to add and remove
var Shelf = (function () {

    var Shelf = function (name, library) {

        this.name = name;
        this.books = [];

        if(arguments.length === 2) {
            this.addShelf(library);
        }
    };

    Shelf.prototype.addShelf = function (library) {
          
        library.shelves.push(this);
    };

    Shelf.prototype.removeShelf = function () {

        library = libDB.findCurrentLibrary(this);
        library.shelves.splice(library.shelves.indexOf(this), 1);
    };
    return Shelf;
})();
