import {ADD_TO_COUNTER, SUBTRACT_FROM_COUNTER} from "../Actions";



const initialState = {
    testStore: 1



}


export const storeReducer = (state = initialState, action) => {


    switch(action.type) {

        case ADD_TO_COUNTER: {
            
            return{
                ...state.testStore,
                testStore: state.testStore + 1

            }


        }

        case SUBTRACT_FROM_COUNTER: {
            
            return{
                ...state.testStore,
                testStore: state.testStore - 1

            }


        }





    }

    return state;




}