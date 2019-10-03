import {CHANGE_VIEW_NOTE_LIST, UPDATE_NOTES,SET_COUNT_NEW_NOTES,SET_COUNT_DELETE_NOTES} from "./actions";
import notes from "../../fixtures";
import {colors} from "../../constants/colors";


const defaultState = {
 isGirdView: false,
 notes: notes,
 colors: colors,
 countCreateNotes:0,
 countDeleteNotes:0.

}

export const noteListReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_VIEW_NOTE_LIST: {
            return {...state, isGirdView: action.payload };
        }
        case UPDATE_NOTES: {
            return {...state, notes: action.payload };
        }
        case SET_COUNT_NEW_NOTES: {
            return {...state, countCreateNotes: action.payload };
        }
        case SET_COUNT_DELETE_NOTES: {
            return {...state, countDeleteNotes: action.payload };
        }

        default: return state;

    }

}