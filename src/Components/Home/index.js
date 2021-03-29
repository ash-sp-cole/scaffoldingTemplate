import React, { Component } from "react";
import { connect } from "react-redux";
import  {addCounter,subtractCounter} from "../../Redux/Actions";

const Home = (props, dispatchAddCounter) => {

    const addCounterFunction = () =>{
       
            props.dispatchAddCounter()
        
    }
    const subCounterFunction = () =>{
       
        props.dispatchSubCounter()
    
}


    return (
        <div>

            <h1> redux state test </h1>
            <br>
            </br>
                    <button onClick = {addCounterFunction}>
                    
                   ADD </button>
                   <button onClick = {subCounterFunction}>
                    
                    SUBTRACT </button>
                    <h3> Counter </h3>
            <h2> {props.savedTestProp} </h2>
        </div>
    )


}

const mapStateToProps = (state, testStore) => {
    return {
        savedTestProp: state.store.testStore
    }


}

const mapDispatchToProps = (dispatch) => {

    return {
        
     dispatchAddCounter :  ( )=>  dispatch(addCounter()),
     dispatchSubCounter :  ( )=>  dispatch(subtractCounter())
    }


}



export default connect(mapStateToProps, mapDispatchToProps)(Home);