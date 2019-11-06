import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TodoCreate from "./todos/TodoCreate";
import TodoEdit from "./todos/TodoEdite";
import TodoDelete from "./todos/TodoDelete";
import TodoMain from "./todos/TodoMain";
import Header from "./Header";


const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component={TodoMain}/>
                    <Route path='/todo/create' exact component={TodoCreate}/>
                    <Route path='/todo/edit' exact component={TodoEdit}/>
                    <Route path='/todo/delete' exact component={TodoDelete}/>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;

