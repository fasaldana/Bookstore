import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const clickHandle = () => {
    try {
      dispatch(
        addNewBook({
          item_id: uuid(),
          title,
          author,
          category: 'not yet',
        }),
      );
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Failed to add book', error);
    }
  };

  return (
    <div className="add-form">
      <h2>ADD NEW BOOK</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onInput={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={clickHandle}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
