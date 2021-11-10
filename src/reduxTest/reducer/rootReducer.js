import { combineReducers } from "redux";
import { usersrReducer } from "./users.reducer";

export const rootReducer = () => combineReducers( {


    users : usersrReducer
});