// script.js
$(document).ready(function () {
    // Array to store the list of books
    let books = [];

    // Form submission handler
    $("#addBookForm").submit(function (event) {
        event.preventDefault();

        // Get values from the form
        let title = $("#bookTitle").val();
        let author = $("#author").val();

        // Validate input
        if (title && author) {
            // Create a new book object
            let newBook = { title: title, author: author };

            // Add the book to the array
            books.push(newBook);

            // Clear the form inputs
            $("#bookTitle").val('');
            $("#author").val('');

            // Update the book list
            updateBookList();
        } else {
            alert("Please fill in both title and author.");
        }
    });

    // Book removal handler
    $(document).on("click", ".remove-book", function () {
        // Get the index of the book to remove
        let index = $(this).data("index");

        // Remove the book from the array
        books.splice(index, 1);

        // Update the book list
        updateBookList();
    });

    // Function to update the book list on the page
    function updateBookList() {
        // Clear the existing list
        $("#bookList").empty();

        // Add each book to the list
        books.forEach(function (book, index) {
            $("#bookList").append(`
                <li class="list-group-item">
                    <span>${book.title} by ${book.author}</span>
                    <button class="btn btn-danger btn-sm float-right remove-book" data-index="${index}">Remove</button>
                </li>
            `);
        });
    }
});
