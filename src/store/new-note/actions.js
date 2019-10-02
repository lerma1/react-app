
export const OPEN_NEW_NOTE = "OPEN_NEW_NOTE";
export const CLOSE_NEW_NOTE = "CLOSE_NEW_NOTE";
export const CREATE_NEW_NOTE = "CREATE_NEW_NOTE";
export const ADD_IMAGE_IN_NEW_NOTE="ADD_IMAGE_IN_NEW_NOTE";
export const CHANGE_COLOR_NEW_NOTE="CHANGE_COLOR_NEW_NOTE";
export const CHANGE_TEXT_NEW_NOTE="CHANGE_TEXT_NEW_NOTE";
export const UN_DO_NEW_NOTE="UN_DO_NEW_NOTE";
export const RE_DO_NEW_NOTE="RE_DO_NEW_NOTE";
export const UPDATE_TEXTBUFFER_NEW_NOTE="UPDATE_TEXTBUFFER_NEW_NOTE";


export const openNewNote = () => ({
    type: OPEN_NEW_NOTE,

});

export const closeNewNote = () => ({
    type: CLOSE_NEW_NOTE,

});

export const createNewNote = (notes) => ({
    type: CREATE_NEW_NOTE,
    payload:notes,
});

export const addImage = (img) => ({
    type: ADD_IMAGE_IN_NEW_NOTE,
    payload:img,
});

export const setColor = (color) => ({
    type: CHANGE_COLOR_NEW_NOTE,
    payload:color,
});

export const setText = (title, text) => ({
    type: CHANGE_TEXT_NEW_NOTE,
    payload:{text: text, title: title}
});

export const updateTextBuffer = (textBuffer) => ({
    type: UPDATE_TEXTBUFFER_NEW_NOTE,
    payload:{textBuffer: textBuffer}
});

export const unDoReDo = ( title, text, textBuffer) => ({
    type: UN_DO_NEW_NOTE,
    payload:{text: text, title: title, textBuffer: textBuffer}
});




