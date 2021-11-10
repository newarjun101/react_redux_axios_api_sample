import userActionType from "./user.actionType";
/**
 * Actually action sent data to reducer and we access data from reducer
 * so our data will be sent ot users.reducer.js
 * and we need to create root reducer to accesss all our reducers because 
 * A react js app contain many reducer so we neeed to collect all redecer and add them to root reducer
 */
const userLoadStart = () => ({


    type : userActionType.USERS_LOAD_START
});

const userLoadSuccess = (users) => ({

    type : userActionType.USERS_LOAD_SUCCESS,
    payload : users,

});

const userLoadError = (errorMessage) => ({


    type : userActionType.USERS_LOAD_ERROR,
    payload : errorMessage

});

export default {

    userLoadStart,
    userLoadSuccess,
    userLoadError
};