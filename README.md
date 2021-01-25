# Library-Management-System
## Instroduction
In this In this project can build a Library Management System for renting books. I have used Javascript as the primary language. 

## Functional Requirements
This program can manage
1. Creating Libraries
2. Adding a Book to Library
3. Adding Stocks 
4. Checking Availability of a given book
5. Requesting to Rent a book
6. Returning Book
7. Calculating the fine to be paid, if returned late

<!--- and//## Design
//1. When you create a libr --->

## Major Components
### Date Class
  1. Useful for calculating no_of_days a book has been rented for.
  2. For any fine if applicable.
  3. Keeping Track of the latest expected returning date of a book [Future Scope]
### Book Class
  1. Has information like Book name, author name
  2. Keeps track of stock of the given Book
  3. Keeps track of dates the book stock was rented on
###Library Class
  1. Stores information about Library's name, address
  2. Keeps record of books registered in the library
  3. Calculates the fine by calculating the rentedDays(method in Date Class)
  
## Scopes for Improvement
1. Use a different database for the Date stored for different libraries
2. Explore different Object Oriented Programming Principles
3. Create a waiting list for a specific books
4. Implement it in Typescript
5. Scope for Data Validation


