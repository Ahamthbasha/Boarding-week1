import { INITIAL_REQUEST, USER_ERROR, USER_FETCHED } from "../action/userAction"

const initialState= {
    loading : false,
    users: [],
    error : ''
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case INITIAL_REQUEST:
            return {
                ...state,
                loading:true
            }
        case USER_FETCHED:
            return{
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