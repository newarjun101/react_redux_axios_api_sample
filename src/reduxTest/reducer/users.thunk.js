import { getAllUsers } from "../../services/user.service";
import action from "./users.action"
/// this funtion send data to user.action.js 
export const loadUserAsync = () => (dispatch) => {


dispatch(action.userLoadStart()) ;

getAllUsers().then((response) => dispatch(action.userLoadSuccess(response.data)))
.catch((error) =>  dispatch(action.userLoadError(error.message)));
}