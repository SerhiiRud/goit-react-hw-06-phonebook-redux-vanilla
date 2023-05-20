import { combineReducers } from 'redux';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

let contactsіInitialState;
const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts);
if (parsedContacts.length > 0) {
  contactsіInitialState = parsedContacts;
} else {
  contactsіInitialState = contactsArray;
}

const contactsReducer = (state = contactsіInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/removeContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = '';

const filtersReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
