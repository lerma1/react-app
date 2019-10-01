import {ADD_IMAGE_IN_NEW_NOTE, CHANGE_COLOR_NEW_NOTE,CHANGE_TEXT_NEW_NOTE,UN_DO_NEW_NOTE,RE_DO_NEW_NOTE, OPEN_NEW_NOTE,CLOSE_NEW_NOTE,UPDATE_TEXTBUFFER_NEW_NOTE,CREATE_NEW_NOTE } from './actions'
import {colors} from "../../constants/colors";

const defaultState = {
    title: "",
    text: "",
    img: null,
    color: colors[0].name,
    isOpen: false,
    colors: colors,
    textBuffer: {data:[],currentIndex:-1},
    date:"",
}

export const newNoteReducer = (state = defaultState, action) => {

    switch (action.type) {
        case OPEN_NEW_NOTE: {
            return {...state, isOpen: true };
        }
        case CLOSE_NEW_NOTE: {
            return {...state, isOpen: false };
        }
        case ADD_IMAGE_IN_NEW_NOTE: {
            return {...state, img: action.payload };
        }
        case CHANGE_COLOR_NEW_NOTE: {
            return {...state, color: action.payload };
        }
        case CREATE_NEW_NOTE: {
            return {...state, notes: action.payload, date: action.date };
        }
        case CHANGE_TEXT_NEW_NOTE: {
            return {...state,  title: action.payload.title, text: action.payload.text };
        }
        case UPDATE_TEXTBUFFER_NEW_NOTE: {
            return {...state,  textBuffer: action.payload.textBuffer };
        }
        case UN_DO_NEW_NOTE: {
            return {...state, title: action.payload.title, text: action.payload.text,  textBuffer: action.payload.textBuffer };
        }
        case RE_DO_NEW_NOTE: {
            return {...state, title: action.payload.title, text: action.payload.text,  textBuffer: action.payload.textBuffer };
        }
        default: return state;

    }

}