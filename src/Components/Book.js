import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Remove</button>
    </>
  );
};

Book.defaultProps = {
  title: '',
  author: '',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
