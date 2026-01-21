import { USER_ERROR, USER_LIST, USER_REQUEST } from "../action/userAction"

const userState = {
    loading:false,
    users:[],
    error:''
}

const userReducer = (state=userState,action)=>{
    switch(action.type){
        case USER_REQUEST:
            return{...state,loading:true}
        case USER_LIST:
            return {...state,loading:false,users:action.payload,error:""}
        case USER_ERROR:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}

export default userReducer