import { FETCH_ERROR, FETCH_REQUEST, FETCH_USER } from "../actions/userActions"

const userState = {
    loading:false,
    users:[],
    error:''
}

export const userReducer = (state = userState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return {...state,loading:true}
        case FETCH_USER:
            return {...state,users:action.payload,loading:false}
        case FETCH_ERROR:
            return {...state,error:action.payload}
        default:
            return state
    }
}