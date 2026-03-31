export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'

export function userRequest(){
    return {
        type : USER_REQUEST
    }
}

export function userSuccess(users){
    return {
        type :USER_SUCCESS,
        payload:users
    }
}

export function userError(error){
    return{
        type:USER_ERROR,
        payload:error
    }
}

export const fetchUsers = ()=>{
    return async function(dispatch){
        try {
            dispatch(userRequest())
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            dispatch(userSuccess(result))
        } catch (error) {
            dispatch(userError(error.message))
        }
    }
}