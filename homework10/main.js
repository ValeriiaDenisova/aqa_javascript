import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
const book2 = new Book("1984", "Джордж Орвелл", 1949);

const ebook1 = new EBook("Маленький принц", "Антуан де Сент-Екзюпері", 1943, "fb2");
ebook1.fileFormat = "EPUB";

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

console.log("------------------------------------")

const booksArray = [book1, book2, ebook1];
const theOldest = Book.findOldestBook(booksArray)
console.log("Oldest book: ");
theOldest.printInfo()

console.log("------------------------------------")

const book3 = new Book("Сага. Книга 1", "Брайан Вон", 2000);
const ebook2 = EBook.fromBook(book3, "PDF")
ebook2.printInfo()