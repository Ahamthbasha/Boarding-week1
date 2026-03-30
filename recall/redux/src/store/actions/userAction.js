export const USER_REQUEST = 'USER_REQUEST'
export const USER_FETCHED = 'USER_FETCHED'
export const USER_ERROR = 'USER_ERROR'

export function userRequest(){
    return{
        type:USER_REQUEST
    }
}

export function userFetch(users){
    return {
        type:USER_FETCHED,
        payload:users
    }
}

export function userFetchedError(error){
    return {
        type : USER_ERROR,
        payload:error
    }
}

export const fetchUser = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(userRequest())
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            dispatch(userFetch(result))
        } catch (error) {
            dispatch(userFetchedError(error.message))
        }
    }
}