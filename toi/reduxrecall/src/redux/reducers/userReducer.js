import { USER_ERROR, USER_LIST, USER_REQUEST } from "../actions/userActions"

const userListState = {
    loading:false,
    users:[],
    error:''
}

export const userReducer = (state = userListState,action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {...state,loading:true}
        case USER_LIST:
            return {...state,loading:false,users:action.payload}
        case USER_ERROR:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}