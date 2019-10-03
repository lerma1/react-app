
export const CHANGE_VIEW_NOTE_LIST = "CHANGE_VIEW_NOTE_LIST";
export const UPDATE_NOTES = "UPDATE_NOTES";


export const setViewNoteList = (isGirdView) => ({
    type: CHANGE_VIEW_NOTE_LIST,
    payload:isGirdView,
});

export const updateNotes = (notes) => ({
    type: UPDATE_NOTES,
    payload:notes,
});




