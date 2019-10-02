export const SAVE_CURRENT_NOTE = "SAVE_CURRENT_NOTE";
export const ADD_IMAGE_IN_CURRENT_NOTE="ADD_IMAGE_IN_CURRENT_NOTE";
export const CHANGE_COLOR_CURRENT_NOTE="CHANGE_COLOR_CURRENT_NOTE";
export const CHANGE_TEXT_CURRENT_NOTE="CHANGE_TEXT_CURRENT_NOTE";
export const UN_DO_RE_DO_CURRENT_NOTE="UN_DO_RE_DO_CURRENT_NOTE";
export const UPDATE_TEXTBUFFER_CURRENT_NOTE="UPDATE_TEXTBUFFER_CURRENT_NOTE";
export const UPDATE_CURRENT_NOTE="UPDATE_CURRENT_NOTE";

export const saveCurrentNote = (notes) => ({
    type: SAVE_CURRENT_NOTE,
    payload:notes,
});

export const addImageCurrentNote = (img) => ({
    type: ADD_IMAGE_IN_CURRENT_NOTE,
    payload:img,
});

export const setColorCurrentNote = (color) => ({
    type: CHANGE_COLOR_CURRENT_NOTE,
    payload:color,
});

export const setTextCurrentNote = (title, text) => ({
    type: CHANGE_TEXT_CURRENT_NOTE,
    payload:{text: text, title: title}
});

export const updateTextBuffer = (textBuffer) => ({
    type: UPDATE_TEXTBUFFER_CURRENT_NOTE,
    payload:{textBuffer: textBuffer}
});

export const unDoReDoCurrentNote = ( title, text, textBuffer) => ({
    type: UN_DO_RE_DO_CURRENT_NOTE,
    payload:{text: text, title: title, textBuffer: textBuffer}
});

export const updateCurrentNote = (id, title, text, color, date, isEditing) => ({
    type: UPDATE_CURRENT_NOTE,
    payload: {id:id, text: text, title: title, color:color, date:date, textBuffer: {data:[],currentIndex:-1}, isEditing:isEditing}
});

