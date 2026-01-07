export const USER_REQUEST = "USER_REQUEST"
export const USERLIST_FETCHED = "USERLIST_FETCHED"
export const USER_REJECTED = "USER_REJECTED"

export function userRequest(){
    return{
        type:USER_REQUEST
    }
}

export function userList(users){
    return{
        type:USERLIST_FETCHED,
        payload:users
    }
}

export function userError(error){
    return{
        type:USER_REJECTED,
        payload:error
    }
}


export const fetchUser = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(userList())
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const result = await response.json()
            dispatch(userList(result))
        } catch (error) {
            dispatch(userError(error.message))
        }
    }
}