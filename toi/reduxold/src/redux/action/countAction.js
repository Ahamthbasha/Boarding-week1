export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const CHANGE_DIRECTION = "CHANGE_DIRECTION"

export function increment(){
    return{
        type:INCREMENT
    }
}

export function decrement(){
    return{
        type:DECREMENT
    }
}

export function changeDirection(dir){
    return {
        type:CHANGE_DIRECTION,
        payload : dir
    }
}