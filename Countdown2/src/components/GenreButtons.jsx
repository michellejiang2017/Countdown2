function GenreButtons({
  showFiction,
  setShowFiction,
  showNonFiction,
  setShowNonFiction,
  showChildren,
  setShowChildren,
}) {
  return (
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
  );
}

export default GenreButtons;