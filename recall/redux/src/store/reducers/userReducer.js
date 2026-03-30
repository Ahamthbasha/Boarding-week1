import { USER_ERROR, USER_FETCHED, USER_REQUEST } from "../actions/userAction"

const listState = {
    loading:false,
    users:[],
    error:''
}

const userReducer = (state=listState,action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {
                ...state,
                loading:true,
                users:[],
                error:''
            }
        case USER_FETCHED:
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case USER_ERROR:
            return {
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return state
    }
}

export default userReducer