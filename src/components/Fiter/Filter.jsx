import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contactsSlice';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </>
  );
}


