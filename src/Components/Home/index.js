import React, { Component } from "react";
import { connect } from "react-redux";


const Home = (props) => {

    return (
        <div>

            <h1> redux state test </h1>
            <br>
            </br>


            <h2> {props.savedTestProp} </h2>
        </div>
    )


}

const mapStateToProps = (state, testStore) => {
    return {
        savedTestProp: state.store.testStore
    }


}



export default connect(mapStateToProps)(Home);