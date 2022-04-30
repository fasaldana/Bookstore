import Book from './Book';

const BookList = () => (
  <>
    <div className="book-list">
      <p>Category</p>
      <div className="book-desc">
        <Book title="The Hunger Games" author="Suzanne Collins" />
      </div>
      <button type="button">Remove</button>
    </div>
    <div className="book-list">
      <p>Category</p>
      <div className="book-desc">
        <Book title="Dune" author="Frank Herbert" />
      </div>
      <button type="button">Remove</button>
    </div>
  </>
);

export default BookList;
