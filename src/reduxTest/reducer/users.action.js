import userActionType from "./user.actionType";

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