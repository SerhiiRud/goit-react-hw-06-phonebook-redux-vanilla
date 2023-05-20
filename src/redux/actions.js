export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};

export const removeContact = id => {
  return {
    type: 'contacts/removeContact',
    payload: id,
  };
};
