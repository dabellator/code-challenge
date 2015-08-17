// create Library Object
// include property for shelves array
// include report of all books
var Library = (function () {

    var Library = function (name) {
        this.name = name;
        this.shelves = [];

        libDB.libraries.push(this);
    };

    Library.prototype.allBooks = function () {
        var books = [];
        var i, j;
        for(i=0;i<this.shelves.length;i++){
            for(j=0;j<this.shelves[i].books.length;j++){
                books.push(this.shelves[i].books[j]);
            }
        }

        return books;       
    };

    return Library;
})();
