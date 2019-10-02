import {
    SAVE_CURRENT_NOTE,
    ADD_IMAGE_IN_CURRENT_NOTE,
    CHANGE_COLOR_CURRENT_NOTE,
    CHANGE_TEXT_CURRENT_NOTE,
    UN_DO_RE_DO_CURRENT_NOTE,
    UPDATE_TEXTBUFFER_CURRENT_NOTE,
    UPDATE_CURRENT_NOTE}
    from './actions'
import {colors} from "../../constants/colors";


const defaultState = {
    title: "",
    text: "",
    img: null,
    color: colors[0].name,
    isEditing: false,
    isOpen:true,
    colors: colors,
    textBuffer: {data:[],currentIndex:-1},
    date:"",
}

export const noteReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SAVE_CURRENT_NOTE: {
            return {...state, notes: action.payload };
        }
        case ADD_IMAGE_IN_CURRENT_NOTE: {
            return {...state, img: action.payload };
        }
        case CHANGE_COLOR_CURRENT_NOTE: {
            return {...state, color: action.payload };
        }
        case CHANGE_TEXT_CURRENT_NOTE: {
            return {...state,  title: action.payload.title, text: action.payload.text };
        }
        case UPDATE_TEXTBUFFER_CURRENT_NOTE: {
            return {...state,  textBuffer: action.payload.textBuffer };
        }
        case UN_DO_RE_DO_CURRENT_NOTE: {
            return {...state, title: action.payload.title, text: action.payload.text,  textBuffer: action.payload.textBuffer };
        }
        case UPDATE_CURRENT_NOTE: {
            return {...state, id:action.payload.id, title: action.payload.title, text: action.payload.text, color: action.payload.color, date: action.payload.date,  textBuffer: action.payload.textBuffer, isEditing: action.payload.isEditing };
        }
        default: return state;

    }

}
