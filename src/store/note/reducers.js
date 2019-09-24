import {CHANGE_COLOR_NEW_NOTE, DELETE_NOTE} from './actions'


const defaultState = {
    id: "",
    title: "",
    text: "",
    color: "white",
    isHover: false,
}


export const noteReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHANGE_COLOR_NEW_NOTE: {
            return {...state, color: action.payload };
        }
        case DELETE_NOTE: {
            return {...state, id: action.payload };
        }
        default: return state;

    }

}