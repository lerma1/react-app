export const OPEN_NEW_NOTE = "OPEN_NEW_NOTE";
export const CLOSE_NEW_NOTE = "CLOSE_NEW_NOTE";
export const CREATE_NEW_NOTE = "CREATE_NEW_NOTE";
export const ADD_IMAGE_IN_NEW_NOTE="ADD_IMAGE_IN_NEW_NOTE";
export const CHANGE_COLOR_NEW_NOTE="CHANGE_COLOR_NEW_NOTE";
export const CHANGE_TITLE_NEW_NOTE="CHANGE_TITLE_NEW_NOTE";
export const CHANGE_TEXT_NEW_NOTE="CHANGE_TEXT_NEW_NOTE";
export const UN_DO_NEW_NOTE="UN_DO_NEW_NOTE";
export const RE_DO_NEW_NOTE="RE_DO_NEW_NOTE";

export const openNewNote = () => ({
    type: OPEN_NEW_NOTE,

});

export const closeNewNote = () => ({
    type: CLOSE_NEW_NOTE,

});

export const createNewNote = (title) => ({
    type: CREATE_NEW_NOTE,
    payload:title,
});

export const addImageNewNote = (img) => ({
    type: ADD_IMAGE_IN_NEW_NOTE,
    payload:img,
});

export const setColorNewNote = (color) => ({
    type: CHANGE_COLOR_NEW_NOTE,
    payload:color,
});

export const setTitleNewNote = (title) => ({
    type: CHANGE_TITLE_NEW_NOTE,
    payload:title,
});

export const setTextNewNote = (text) => ({
    type: CHANGE_TEXT_NEW_NOTE,
    payload:text
});

export const unDoNewNote = ( text) => ({
    type: UN_DO_NEW_NOTE,
    payload:text,
});

export const reDoNewNote = (text) => ({
    type: RE_DO_NEW_NOTE,
    payload:text,
});
