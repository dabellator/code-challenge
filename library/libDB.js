// Keep track of all the libraries
// include the ability to search shelves or books by title
// include the ability to find parent container (shelf or library)

var libDB = (function () {
    
    return {

        libraries: [],

        findLibrary: function (library) {
        
            var result = library + " was not found";
            var i;
        
            for(i=0;i<this.libraries.length;i++){
                if(this.libraries[i].name === library) {
                    result = this.libraries[i];
                    break;
                }
            }
            return result;
        },

        // Allows the Shelf Object to remove itself without knowledge of Library
        findCurrentLibrary: function (shelf) {
        
            var result = "That shelf is not currently in library";
            var i;
        
            for(i=0;i<this.libraries.length;i++){
                if(this.libraries[i].shelves.indexOf(shelf) !== -1) {
                    result = this.libraries[i];
                    break;
                }
            }     
            return result;
        },

        findShelf: function (shelf) {
        
            var result = shelf + " was not found";
            var i, j;
        
            for(i=0;i<this.libraries.length;i++){
                for(j=0;j<this.libraries[i].shelves.length;j++){
                    if(this.libraries[i].shelves[j].name === shelf) {
                        result = this.libraries[i].shelves[j];
                        break;
                    }
                }
            }      
            return result;
        },

        // Allows the Book Object to remove itself without knowledge of Shelf
        findCurrentShelf: function (book) {

            var result = "That book is not currently shelved";
            var i, j;

            for(i=0;i<this.libraries.length;i++){
                for(j=0;j<this.libraries[i].shelves.length;j++){
                    if(this.libraries[i].shelves[j].books.indexOf(book) !== -1) {
                        result = this.libraries[i].shelves[j];
                        break;
                    }
                }
            }
            return result;
        },

        findBook: function (title) {

            var result = title + " was not found";
            var i, j, b;

            for(i=0;i<this.libraries.length;i++){
                for(j=0;j<this.libraries[i].shelves.length;j++){
                    for(b=0;b<this.libraries[i].shelves[j].books.length;b++){
                        if(this.libraries[i].shelves[j].books[b].title === title) {
                            result = this.libraries[i].shelves[j].books[b];
                            break;
                        }
                    }
                }
            }
            return result;
        }
    };
})();
