import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/actions';
import { Contacts, ContactItem, FormButton } from './Contacts.styled';

const getVisibleContacts = (contacts, filter) => {
  return [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onDelete = id => {
    dispatch(removeContact(id));
  };

  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <Contacts>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <FormButton type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </FormButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};

// ContactList.propTypes = {
//   contactsList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
