import { useState } from "react";

const bookData = {
  "fiction": [
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"title": "1984", "author": "George Orwell", "price": 8.50},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
  ],
  "non-fiction": [
    {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
    {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
    {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
  ],
  "children": [
    {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
    {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
    {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
  ]
};


function App() {
  const [showFiction, setShowFiction] = useState(true);
  const [showNonFiction, setShowNonFiction] = useState(true);
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div>
      <h1>Online Bookstore</h1>

      <div>
        <button onClick={() => setShowFiction(!showFiction)}>
          {showFiction ? "Hide Fiction" : "Show Fiction"}
        </button>

        <button onClick={() => setShowNonFiction(!showNonFiction)}>
          {showNonFiction ? "Hide Non-Fiction" : "Show Non-Fiction"}
        </button>

        <button onClick={() => setShowChildren(!showChildren)}>
          {showChildren ? "Hide Children" : "Show Children"}
        </button>
      </div>

      {showFiction && (
        <div>
          <h2>Fiction:</h2>
          {bookData.fiction.map((book, index) => (
            <p key={index}>
              {book.title}, {book.author}, ${book.price}
            </p>
          ))}
        </div>
      )}

      {showNonFiction && (
        <div>
          <h2>Non-Fiction:</h2>
          {bookData["non-fiction"].map((book, index) => (
            <p key={index}>
              {book.title}, {book.author}, ${book.price}
            </p>
          ))}
        </div>
      )}

      {showChildren && (
        <div>
          <h2>Children:</h2>
          {bookData.children.map((book, index) => (
            <p key={index}>
              {book.title}, {book.author}, ${book.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;