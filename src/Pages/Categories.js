import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.value);

  const clickHandler = () => {
    dispatch(checkStatus({}));
  };
  return (
    <>
      <h2>
        Status:
        {status}
      </h2>
      <button type="button" onClick={clickHandler}>
        Check Status
      </button>
    </>
  );
}
