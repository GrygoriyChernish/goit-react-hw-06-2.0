import Contact from '../Contact/Contact';
import { list, item } from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={list}>
      {contacts.map(contact => (
        <li key={contact.id} className={item}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
