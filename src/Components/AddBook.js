import { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
