import {CHANGE_VIEW_NOTE_LIST, ADD_NOTE, DELETE_NOTE } from "./actions";
import notes from "../../fixtures";

const defaultState = {
 view: "list",
 notes: notes,

}

export const noteListReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_VIEW_NOTE_LIST: {
            return {...state, view: action.payload };
        }
        case ADD_NOTE: {
            return {...state, notes: action.payload };
        }
        case DELETE_NOTE: {
            return {...state, notes: action.payload };
        }
        default: return state;

    }

}