class Library{
    constructor(name, address){
        this.name = name
        this.address = address
        books = []
    }
    addStock(book_id, no_of_stock){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else books[i].addStock(no_of_stock)
    }
    rentBookStock(book_id, stock_id, student_id){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else books[book_id].rentBookStock(stock_id, student_id)
    }
    requestRent(book_id, student_id){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else books[book_id].requestRent(stock_id, student_id)
    }
    returnBook(book_id, stock_id){
        if(book_id >= books.length){
            console.log("No Such Book registered")
        }
        else{
            books[book_id].rentBook(stock_id)
        }
    }
}