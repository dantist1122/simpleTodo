import React from 'react';
import {Field, reduxForm} from 'redux-form';


class TodoForm extends React.Component {
    renderError({error, touched}) {
        if(touched && error ) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>

                </div>
            );
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input}  autoComplete='off'/>
                {this.renderError(formProps.meta)}
            </div>
        )
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                className='ui form error'
                onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name='title'
                    component={this.renderInput}
                    label='Enter Title'
                />
                <Field
                    name='content'
                    component={this.renderInput}
                    label='Enter Content'
                />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}


const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "You need enter a title"
    }
    if(!formValues.content){
        errors.content = 'You need enter a content'
    }
    return errors;
};


export default reduxForm({
    form: 'CreateTodo',
    validate
})(TodoForm);



