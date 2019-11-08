import Modal from '../Modal';
import React from 'react';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchTodo, completeTodo} from "../../actions";
import {Link } from 'react-router-dom';



class TodoDelete extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }



    renderActions() {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={()=> this.props.completeTodo(id)} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.todo) {
            return 'Are you sure you want to delete this to do?'
        }
        return `Are you sure you want ot delete the to do with title: ${this.props.todo.title}`
    }

    render() {
        return (
            <Modal
                title='Delete '
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todo: state.todo[ownProps.match.params.id]
    }
};


export default connect(mapStateToProps, {fetchTodo, completeTodo})(TodoDelete);

