import React from 'react';
import {connect } from 'react-redux';
import TodoMain from "./todos/TodoMain";

class Body extends React.Component {

    renderBody() {
        if(this.props.isSignedIn===null){
            return  null;
        } else if(this.props.isSignedIn){
            return <TodoMain />
        } else {
            return <h1>Go Ahead and Sign In ---^ </h1>
        }
    }


    render() {
        return (
            <div>
                {this.renderBody()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps)(Body);