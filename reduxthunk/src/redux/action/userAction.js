export const USER_FETCH_REQUEST = "USER_FETCH_REQUEST"
export const USER_FETCHED_DATA = "USER_FETCHED_DATA"
export const USER_FETCHED_ERROR = "USER_FETCHED_ERROR"


export function userFetchRequest(){
    return {
        type: USER_FETCH_REQUEST
    }
}

export function userFecthedData(users){
    return {
        type : USER_FETCHED_DATA,
        payload:users
    }
}

export function userFetchedError(error){
    return {
        type : USER_FETCHED_ERROR,
        payload:error
    }
}


export const fetchUser = () => {
    return async(dispatch)=>{
        dispatch(userFetchRequest())
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const result = await response.json()

            dispatch(userFecthedData(result))
        } catch (error) {
            dispatch(userFetchedError(error.message))
        }
    }
}