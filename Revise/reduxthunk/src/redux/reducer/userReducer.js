import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_REQUEST } from "../action/userAction"

const userListState = {
    loading:false,
    users : [],
    error:''
}

const userReducer = (state=userListState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {...state,loading:true}
        case FETCH_USER:
            return {...state,loading:false,users:action.payload,error:''}
        case FETCH_USER_ERROR:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}

export default userReducer