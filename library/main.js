var central = new Library('Central Library');
console.log(central);
// Library {name: 'Central Library', shelves: []}

var branch = new Library('Branch Library');
console.log(libDB.libraries.length);
// 2

var fictionShelf = new Shelf('fiction', central);
console.log(fictionShelf);
// Shelf {name: 'fiction', books: []}

var historyShelf = new Shelf('history');
historyShelf.addShelf(central);
console.log(central.shelves.length);
// 2

historyShelf.removeShelf();
console.log(central.shelves.length);
// 1

console.log(libDB.findShelf('history'));
// Your shelf was not found

var atlasShrugged = new Book('Atlas Shrugged', 'Ayn Rand', fictionShelf);
console.log(atlasShrugged);
// Book {title: 'Atlash Shrugged', author: 'Ayn Rand'}

var warPeace = new Book('War and Peace', 'Leo Tolstoy', fictionShelf);
var lifePi = new Book('Life of Pi', 'Yann Martel');
lifePi.shelfBook(fictionShelf);
console.log(fictionShelf.books.length);
// 3
console.log(central.allBooks().length);
// 3

warPeace.unshelfBook();
console.log(fictionShelf.books.length);
// 2

var foundBook = libDB.findBook('Atlas Shrugged');
console.log(foundBook);
// Book {name: 'Atlas Shrugged', author: 'Ayn Rand'}

var foundShelf = libDB.findShelf('fiction');
console.log(foundShelf);
// Shelf {name: 'fiction', books: [Array[2]]}

var foundLibrary = libDB.findLibrary('Branch Library');
console.log(foundLibrary);
// Book {name: 'Branch Library', shelves: []}
