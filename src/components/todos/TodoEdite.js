import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchTodo, editTodo} from "../../actions";
import TodoForm from "./TodoForm";

class TodoEdit extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
       this.props.editTodo(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.todo) {
            return <div>Loading....</div>
        }
        return (
            <div>
                <h3>Edit a To do</h3>
                <TodoForm
                    initialValues={_.pick(this.props.todo, 'title', 'content')}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {todo: state.todo[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchTodo, editTodo})(TodoEdit);




