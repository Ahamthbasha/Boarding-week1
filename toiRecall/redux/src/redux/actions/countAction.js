export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const CHANGE_DIRECTION = "CHANGE_DIRECTION"

export function increase(){
    return{
        type : INCREASE
    }
}


export function decrease(){
    return{
        type : DECREASE
    }
}

export function changeDirection(dir){
    return{
        type : CHANGE_DIRECTION,
        payload:dir
    }
}