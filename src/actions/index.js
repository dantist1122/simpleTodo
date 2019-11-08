import todos from '../apis/todos';
import history from '../history';
import {SIGN_IN, SIGN_OUT, CREATE_TODO, COMPLETE_TODO, EDIT_TODO, FETCH_TODO, FETCH_TODOS} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};


export const createTodo = formValues => async (dispatch, getState )=> {
    const {userId} = getState().auth;
    const response = await todos.post('/todo', {...formValues, userId});

    dispatch({type: CREATE_TODO, payload: response.data});
    history.push('/');

};

export const fetchTodos = () => async dispatch => {
 const response = await todos.get('/todo');

 dispatch ({type: FETCH_TODOS, payload: response.data})
};

export const fetchTodo = (id) => async dispatch => {
   const  response = await todos.get(`/todo/${id}`);

   dispatch({type:FETCH_TODO, payload: response.data})
};

export const editTodo = (id, formValues) => async dispatch => {
    const response = await todos.patch(`/todo/${id}`, formValues);

  dispatch({type:EDIT_TODO, payload:response.data});
    history.push('/');
};

export const completeTodo = (id) => async dispatch => {
    await todos.delete(`/todo/${id}`);

    dispatch({type:COMPLETE_TODO, payload: id });
    history.push('/');

};


