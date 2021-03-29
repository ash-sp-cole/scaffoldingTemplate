 export const ADD_TO_COUNTER = "ADD_TO_COUNTER";
 export const SUBTRACT_FROM_COUNTER = "SUBTRACT_FROM_COUNTER";



export const addCounter = () => {
    console.log("test act ")
    return {
        type: ADD_TO_COUNTER
    }


}

export const subtractCounter = () => {

    return {
        type: SUBTRACT_FROM_COUNTER
    }


}