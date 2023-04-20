
import { Filter } from './Fiter/Filter';
import  { Contacts } from './Contacts/Contacts';
import  ContactForm   from './ContactForm/ContactForm';


 const App = () => {

    return (
      <container className="App">
        <h1>Phonebook</h1>
        <ContactForm  />

       <h2>Contacts</h2>
            <Filter />
            <Contacts/>
      </container>
    );
  }

  export default App;