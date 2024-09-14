class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }


    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._title = value;
        } else {
            throw new Error("Title is empty");
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._title = value;
        } else {
            throw new Error("Author is empty");
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (Number.isInteger(value) && value > 0) {
            this._year = value;
        } else {
            throw new Error("Incorrect year number");
        }
    }

    printInfo() {
        console.log(`Назва: ${this._title}, Автор: ${this._author}, Рік видання: ${this._year}`);
    }

    static findOldestBook(booksArray) {
        return booksArray.reduce((oldest, current) => {
            return (current.year < oldest.year) ? current : oldest;
        });
    }
}

export default Book;
