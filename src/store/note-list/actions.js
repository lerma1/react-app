
export const CHANGE_VIEW_NOTE_LIST = "CHANGE_VIEW_NOTE_LIST";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const setViewNoteList = (view) => ({
    type: CHANGE_VIEW_NOTE_LIST,
    payload:view,
});

export const addNote = (notes) => ({
    type: ADD_NOTE,
    payload:notes,
});

export const deleteNote = (notes) => ({
    type: DELETE_NOTE,
    payload:notes,
});


