import { USER_REJECTED, USER_REQUEST, USERLIST_FETCHED } from "../action/userAction"

const initialState = {
    loading:false,
    users : [],
    error:''
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {...state,loading:true}
        case USERLIST_FETCHED:
            return {...state,users:action.payload}
        case USER_REJECTED:
            return {...state,error:action.payload}
        default:
            return state
    }
}

export default userReducer