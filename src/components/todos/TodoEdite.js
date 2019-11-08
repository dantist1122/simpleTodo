import React from 'react';
import {connect} from 'react-redux';
import {fetchTodo} from "../../actions";

class TodoEdit extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    render() {
        if(!this.props.todo) {
            return <div>Loading....</div>
        }
        return (
            <div>{this.props.todo.title}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {todo: state.todo[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchTodo})(TodoEdit);




