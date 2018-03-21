const defaultState = {
  showFav: false,
  notes:[],
  favNotes:[],
};

const notes = (state = defaultState, action) => {
  switch (action.type) {
  case 'ADD_NOTE':
    return{
      ...state,
      notes: [
        ...state.notes,
        action.note
      ],
    };
  case 'DELETE_NOTE':
    state.notes.splice(state.notes.indexOf(action.note), 1);
    state.favNotes.splice(state.favNotes.indexOf(action.note), 1);
    return{
      ...state,
      notes: [
        ...state.notes,
      ],
      favNotes: [
        ...state.favNotes,
      ],
    };
  case 'ADD_FAV':
    return{
      ...state,
      favNotes: [
        ...state.favNotes,
        action.note,
      ],
    };
  case 'SHOW_FAV':
    return{
      ...state,
      showFav: !state.showFav,
    };
  default:
    return state;
  }
};

export default notes;
