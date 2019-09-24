

export const CHANGE_COLOR_NEW_NOTE="CHANGE_COLOR_NEW_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const setColorNote = (color) => ({
    type: CHANGE_COLOR_NEW_NOTE,
    payload:color,
});

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: id,
});