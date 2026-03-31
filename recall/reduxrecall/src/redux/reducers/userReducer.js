import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from "../actions/userActions"

const userState = {
    loading : false,
    users : [],
    error : ''
}

const userReducer = (state=userState,action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {...state,loading:true}
        case USER_SUCCESS:
            return {...state,loading:false,users:action.payload}
        case USER_ERROR:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}

export default userReducer