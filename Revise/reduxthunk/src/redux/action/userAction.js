export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_ERROR = "FETCH_USER_ERROR"


export function fetchRequest(){
    return{
        type:FETCH_USER_REQUEST
    }
}

export function fetchUser(user){
    return{
        type:FETCH_USER,
        payload:user
    }
}

export function fetchError(err){
    return{
        type:FETCH_USER_ERROR,
        payload:err
    }
}


export const fetchUserList = () => {
    return async(dispatch)=>{
        try {
            dispatch(fetchRequest())
            const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const result = await rawResponse.json()
            dispatch(fetchUser(result))
        } catch (error) {
            const message = error.message
            dispatch(fetchError(message))
        }
    }
}