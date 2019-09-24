import {combineReducers} from "redux";
import {newNoteReducer} from "./new-note/reducers";
import {noteReducer} from "./note/reducers";
import {noteListReducer} from "./note-list/reducers";


export  default combineReducers({
    newNote: newNoteReducer,
    note: noteReducer,
    noteList: noteListReducer ,
});