class Book{
    constructor(name, author,id){
        this.name = name
        this.author = author
        this.id = id
        this.stocks = []
    }
    addStock(no_of_stock = 1){
        for(var i=0;i<no_of_stock;i++){
            this.stocks.push({studentId:null, due_on = null})
        }
    }
    rentBookStock(stock_id, student_id){
        if(stock_id >= this.stocks.length){
            console.log("No Such Stock")
        }
        else{
            if(this.stocks[stock_id].studentId == null){
                console.log("Sorry Book Currently not Available")
            }
            else{
                this.stocks[stock_id].studentId = student_id
                console.log("Book Assigned")
            }
        }
    }
    requestRent(student_id, book_id = null){
        if(book_id != null){
            if(this.stocks[book_id].studentId ==  null){
                this.stocks[book_id].studentId = student_id
                console.log("Book", book_id, "ASSIGNED!")
            }
            else console.log("Book Stock not available. Please check out later")
            return
        }
        var available = this.checkAvailabity()
        if(available == null){
            console.log("Please check out later")
        }
        else{
            this.stocks[available].studentId = student_id
            console.log("Book", this.stocks[available].bookId, "ASSIGNED!")
        }
    }
    checkAvailabity(){
        var availables = []
        for(var i=0;i<this.stocks.length;i++){
            if(this.stocks[i].studentId == null){
                availables.push(i)
            }
        }
        if(availables.length == 0){
            console.log("Sorry Book Currently not Available")
            return null
        }
        else{
            if(availables.length == 1){
                console.log(availables.length, "is available:", availables)
            }
            else console.log(availables.length, "are available:", availables)
            return availables[0] // The first book that is available
        }
    }
    returnBook(book_id){
        for(var i=0;i<this.stocks.length;i++){
            if(this.stocks[i].bookId == book_id){
                this.stocks[i].studentId = null
                console.log("Book returned")
                return
            }
        }
        console.log("Books not recognised")
    }
    display(){
        console.log(this.name, this.author)
        console.log(this.stocks)
    }
}
// var answer = prompt("How are you? ")
console.log("It Works!")
var creatingAbundance = new Book()
console.log("creatingAbundance.addStock(1)")
creatingAbundance.addStock(1)
console.log("creatingAbundance.addStock(1)")
creatingAbundance.addStock(1)
console.log("creatingAbundance.addStock(1)")
creatingAbundance.addStock(1)
console.log("creatingAbundance.checkAvailabity()")
creatingAbundance.checkAvailabity()
console.log("creatingAbundance.requestRent(2,1)")
creatingAbundance.requestRent(2,1)
console.log("creatingAbundance.requestRent(2)")
creatingAbundance.requestRent(2)
console.log("")
creatingAbundance.requestRent(2)
console.log("")
creatingAbundance.requestRent(2)
console.log("")
creatingAbundance.returnBook(23)
console.log("")
creatingAbundance.requestRent(2)