import ContactList from '../ContactList/ContactList';
import { wrapper, title } from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
