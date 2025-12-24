import { USER_FETCH_REQUEST, USER_FETCHED_DATA, USER_FETCHED_ERROR } from "../action/userAction"

const initialState = {
    loading : false,
    users : [],
    error: ''
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case USER_FETCH_REQUEST:
            return {...state,loading:true}
        case USER_FETCHED_DATA:
            return {...state,loading:false,users:action.payload,error:''}
        case USER_FETCHED_ERROR:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}

export default userReducer