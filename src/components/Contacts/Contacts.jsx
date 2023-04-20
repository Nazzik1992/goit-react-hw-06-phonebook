
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
  const filterContacts  = () => {
   
    return   contacts.filter(contact =>
         contact.name.toLowerCase().includes(filter.toLowerCase())
       );
   };
  return (
    <>
      <h2>Contacts</h2>
      <ul>
      {filterContacts().map(({ id, name, number }) => {

          return (
            <li key={id}
            className={css.List}>
              <p>
                {name}: {number}
              </p>
              <button
              className={css.Btn}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
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