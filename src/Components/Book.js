import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Book = (props) => {
  const { title, author } = props;
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const end = 80;

  useEffect(() => {
    setTimeout(() => {
      if (progress < end) {
        setProgress(progress + 1);
      }
    }, 10);
  }, [progress]);

  const updateProgress = () => {
    if (progress === 99) setIsCompleted(true);
    setProgress(progress + 1);
  };

  const progressStyle = {
    background: `conic-gradient(#0290ff ${progress * 3.6}deg, #e8e8e8 0deg)`,
  };

  return (
    <div className="book">
      <div className="book-cover">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div className="progress">
        <h2>Progress</h2>
        <div className="book-progress" style={progressStyle}>
          <span className="book-progress-percentage">
            {progress}
            %
          </span>
        </div>
        <button className="update-btn" type="button" onClick={updateProgress} disabled={isCompleted}>
          {isCompleted ? 'Completed' : 'Update Progress'}
        </button>
      </div>
    </div>
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
