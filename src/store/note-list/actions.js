
export const CHANGE_VIEW_NOTE_LIST = "CHANGE_VIEW_NOTE_LIST";
export const UPDATE_NOTES = "UPDATE_NOTES";
export const SET_COUNT_NEW_NOTES = "SET_COUNT_NEW_NOTES";
export const SET_COUNT_DELETE_NOTES = "SET_COUNT_DELETE_NOTES";



export const setViewNoteList = (isGirdView) => ({
    type: CHANGE_VIEW_NOTE_LIST,
    payload:isGirdView,
});

export const updateNotes = (notes) => ({
    type: UPDATE_NOTES,
    payload:notes,
});

export const setCountNewNotes = (countCreateNotes) => ({
    type: SET_COUNT_NEW_NOTES,
    payload:countCreateNotes,
});

export const setCountDeleteNotes = (countDeleteNotes) => ({
    type: SET_COUNT_DELETE_NOTES,
    payload:countDeleteNotes,
});




