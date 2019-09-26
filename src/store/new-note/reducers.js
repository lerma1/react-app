import {ADD_IMAGE_IN_NEW_NOTE, CHANGE_COLOR_NEW_NOTE,CHANGE_TITLE_NEW_NOTE,CHANGE_TEXT_NEW_NOTE,UN_DO_NEW_NOTE,RE_DO_NEW_NOTE, OPEN_NEW_NOTE,CLOSE_NEW_NOTE } from './actions'
import {colors} from "../../constants/colors";

const defaultState = {
    title: "",
    text: "",
    img: null,
    color: colors[0].name,
    isOpen: true,
    colors: colors,
}

export const newNoteReducer = (state = defaultState, action) => {
  console.log(state);
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
        case CHANGE_TITLE_NEW_NOTE: {

            return {...state, title: action.payload };
        }
        case CHANGE_TEXT_NEW_NOTE: {
            return {...state, text: action.payload };
        }
        case UN_DO_NEW_NOTE: {
            return {...state, text: action.payload };
        }
        case RE_DO_NEW_NOTE: {
            return {...state, text: action.payload };
        }
        default: return state;

    }

}