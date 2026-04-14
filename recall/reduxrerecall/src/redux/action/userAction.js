export const INITIAL_REQUEST = 'INITIAL_REQUEST'
export const USER_FETCHED = 'USER_FETCHED'
export const USER_ERROR = 'USER_ERROR'

export function initalRequest(){
    return {
        type:INITIAL_REQUEST
    }
}

export function fetchUser(users){
    return{
        type:USER_FETCHED,
        payload:users
    }
}

export function fetchUserError(error){
    return{
        type:USER_ERROR,
        payload:error
    }
}

export const fetchUserData = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(initalRequest())
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const result = await response.json()
            dispatch(fetchUser(result))
        } catch (error) {
            dispatch(fetchUserError(error.message))
        }
    }
}