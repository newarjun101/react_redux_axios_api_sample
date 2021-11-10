import initializeState from "./users.initializeState";
import actionType from "./user.actionType"

export const usersrReducer = (state = initializeState, {type,payload}) =>{


    switch (type) {

        case actionType.USERS_LOAD_ERROR : 
        return {


            ...state,
            isLoading : true,
            users : null,
            errorMessage : null
        };
        
        case actionType.USERS_LOAD_ERROR : 
        return {


            ...state,
            isLoading : false,
       
            errorMessage : payload,
        };
        case actionType.USERS_LOAD_SUCCESS : 
        return {


            ...state,
            isLoading : false,
            users : payload,
           
        };

    default  :
     return state;
        


        
    }
}