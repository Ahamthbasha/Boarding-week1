export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_USER = "FETCH_USER"
export const FETCH_ERROR = "FETCH_ERROR"

export function fetchRequest(){
    return{
        type:FETCH_REQUEST
    }
}

export function fetchUser(users){
    return{
        type:FETCH_USER,
        payload:users
    }
}

export function fetchError(error){
    return{
        type:FETCH_ERROR,
        payload:error
    }
}

export const fetchUserList = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(fetchRequest())
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            console.log(response)
            const result = await response.json()
            dispatch(fetchUser(result))
        } catch (error) {
            dispatch(fetchError(error.message))
        }
    }
}