import css from './ContactForm.module.css'
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContactsState } from '../../redux/contactsSlice';


const initialValues = {
  name: '',
  number: '',
};

export  function ContactForm() {
  const contacts = useSelector(getContactsState);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    let check = contacts.find(e => e.name === values.name);

    if (check === undefined) {
      resetForm();
      dispatch(addContact(values));
    } else {
      swal(`"${values.name}" is alredy in contacts`, '', 'warning');
    }
  };
    return (
      <>
        <form className={css.form} initialValues={initialValues} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              name="name"
            />
          </label>

          <label className={css.label} htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
      </>
    );
  }

  