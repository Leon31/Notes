export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const deleteNote = () => ({
  type: 'DELETE_NOTE',
});

export const addFav = (note) => ({
  type: 'ADD_FAV',
  note
});

export const showFav = () => ({
  type: 'SHOW_FAV',
});

export const navigate = (screen) => ({
  type: 'NAVIGATE',
  screen
});

export const navigateBack = () => ({
  type: 'NAVIGATE_BACK',
});
