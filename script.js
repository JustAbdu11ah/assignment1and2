$(document).ready(function () {
    let books = [];

    $("#addBookForm").submit(function (event) {
        event.preventDefault();

        let title = $("#bookTitle").val();
        let author = $("#author").val();

        if (title && author) {
            let newBook = { title: title, author: author };

            books.push(newBook);

            $("#bookTitle").val('');
            $("#author").val('');

            updateBookList();
        } else {
            alert("Please fill in both title and author.");
        }
    });

    $(document).on("click", ".remove-book", function () {
        let index = $(this).data("index");

        books.splice(index, 1);

        updateBookList();
    });

    function updateBookList() {
        $("#bookList").empty();

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
