
export const CHANGE_VIEW_NOTE_LIST = "CHANGE_VIEW_NOTE_LIST";
export const UPDATE_NOTES = "UPDATE_NOTES";


export const setViewNoteList = (view) => ({
    type: CHANGE_VIEW_NOTE_LIST,
    payload:view,
});

export const updateNotes = (notes) => ({
    type: UPDATE_NOTES,
    payload:notes,
});




