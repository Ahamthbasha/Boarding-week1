export const USER_REQUEST = "USER_REQUEST"
export const USER_LIST = "USER_LIST"
export const USER_ERROR = "USER_ERROR"


export function userRequest(){
    return{
        type:USER_REQUEST
    }
}

export function userList(users){
    return{
        type:USER_LIST,
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
    return async(dispatch)=>{
        try {
            dispatch(userRequest())
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const result = await response.json()
            dispatch(userList(result))
        } catch (error) {
            dispatch(userError(error.message))
        }
    }
}