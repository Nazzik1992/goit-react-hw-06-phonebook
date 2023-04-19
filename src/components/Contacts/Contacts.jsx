
import PropTypes from 'prop-types';
import css from './Contacts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContactsState,
  getFilterState,
} from '../../redux/contactsSlice';

export function Contacts() {
  const contacts = useSelector(getContactsState);
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(e => {
          if (!e.name.toLowerCase().includes(filter.toLowerCase())) {
            return null;
          }

          return (
            <li key={e.id}
            className={css.List}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
              className={css.Btn}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(e.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};