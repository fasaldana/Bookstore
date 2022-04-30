import Book from './Book';

const BookList = () => {
  const booksArr = [
    { title: 'The Hunger Games', author: 'Suzanne Collins' },
    { title: 'The Hunger Games2', author: 'Suzanne Collins2' },
  ];
  return (
    <>
      {booksArr.map((book) => (
        <div key={book.name} className="book-list">
          <p>Category</p>
          <div className="book-desc">
            <Book title={book.title} author={book.author} />
          </div>
        </div>
      ))}
    </>
  );
};

export default BookList;
