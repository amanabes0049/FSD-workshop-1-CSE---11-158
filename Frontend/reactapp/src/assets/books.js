// Array of Book Objects
let books = [
    {
        bookTitle: "The Alchemist",
        author: "Paulo Coelho",
        publication: "HarperOne",
        price: 399,
        edition: "25th Anniversary Edition"
    },
    {
        bookTitle: "Clean Code",
        author: "Robert C. Martin",
        publication: "Prentice Hall",
        price: 699,
        edition: "1st Edition"
    },
    {
        bookTitle: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        publication: "O'Reilly Media",
        price: 550,
        edition: "1st Edition"
    }
];

// Display Book Details
for (let i = 0; i < books.length; i++) {
    console.log("Book " + (i + 1));
    console.log("Title: " + books[i].bookTitle);
    console.log("Author: " + books[i].author);
    console.log("Publication: " + books[i].publication);
    console.log("Price: ₹" + books[i].price);
    console.log("Edition: " + books[i].edition);
    console.log("----------------------------");
}