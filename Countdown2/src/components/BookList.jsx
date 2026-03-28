function BookList({ title, books }) {
  return (
    <div>
      <h2>{title}</h2>

      {books.map((book, index) => (
        <p key={index}>
          {book.title}, {book.author}, ${book.price}
        </p>
      ))}
    </div>
  );
}

export default BookList;