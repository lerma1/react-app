import {CHANGE_VIEW_NOTE_LIST, UPDATE_NOTES} from "./actions";
import notes from "../../fixtures";
import {colors} from "../../constants/colors";

const defaultState = {
 isGirdView: false,
 notes: notes,
 colors: colors,

}

export const noteListReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_VIEW_NOTE_LIST: {
            return {...state, isGirdView: action.payload };
        }
        case UPDATE_NOTES: {
            return {...state, notes: action.payload };
        }

        default: return state;

    }

}