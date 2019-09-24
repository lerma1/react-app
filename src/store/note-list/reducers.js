import {CHANGE_VIEW_NOTE_LIST} from "./actions";

const defaultState = {
 view: "list",
}

export const noteListReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_VIEW_NOTE_LIST: {
            return {...state, view: action.payload };
        }
        default: return state;

    }

}