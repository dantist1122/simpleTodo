import React from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../../actions';
import {Link} from 'react-router-dom';

class TodoMain extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderAdmin(todo) {
        if (todo.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/todo/edit/${todo.id}`} className='ui button primary' >
                        Edit
                    </Link>
                    <button className='ui button negative'>
                        Complete
                    </button>
                </div>
            )
        }
    }

    renderList() {
        return this.props.todos.map(todo => {
            if(todo.userId === this.props.currentUserId) {
            return (
                <div className={'item'} key={todo.id}>
                    {this.renderAdmin(todo)}
                    <i className='large middle aligned icon camera'/>
                    <div className='content'>
                        {todo.title}
                        <div className='description'>
                            {todo.content}
                        </div>
                    </div>

                </div>
            )} else {
                return null;
            }
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <div className='ui celled list'>
                        {this.renderList()}
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <Link to='/todo/create' className='ui button primary'>
                            Create new to do
                        </Link>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Todos</h2>
                <div className='ui celled list'>
                    {this.renderCreate()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: Object.values(state.todo),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {fetchTodos})(TodoMain);