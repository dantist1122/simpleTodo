import React from 'react';
import {Router, Route} from 'react-router-dom';
import TodoCreate from "./todos/TodoCreate";
import TodoEdit from "./todos/TodoEdite";
import TodoDelete from "./todos/TodoDelete";
import Header from "./Header";
import Body from './Body';
import history from '../history';


const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path='/' exact component={Body}/>
                    <Route path='/todo/create' exact component={TodoCreate}/>
                    <Route path='/todo/edit/:id' exact component={TodoEdit}/>
                    <Route path='/todo/delete' exact component={TodoDelete}/>
                </div>
            </Router>
        </div>
    )
};

export default App;

