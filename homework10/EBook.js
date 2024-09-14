import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }


    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFileFormat) {
        const allowedFormats = ['PDF', 'EPUB', 'MOBI', 'AZW'];
        if (allowedFormats.includes(newFileFormat)) {
            this._fileFormat = newFileFormat;
        } else {
            throw new Error(`Incorrect file format. Should be: ${allowedFormats.join(', ')}`);
        }
    }

    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат: ${this._fileFormat}`);
    }

    static fromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }

}

export default EBook;