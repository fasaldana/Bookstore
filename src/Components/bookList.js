import AddBook from './AddBook';
import Book from './Book';

const BookList = () => {
  const booksArr = [
    { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'The Hunger Games2', author: 'Suzanne Collins2' },
  ];
  return (
    <>
      {booksArr.map((book) => (
        <div key={book.id} className="book-list">
          <p>Category</p>
          <div className="book-desc">
            <Book title={book.title} author={book.author} />
          </div>
        </div>
      ))}
      <AddBook />
    </>
  );
};

export default BookList;
