import React, { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: ''
    }
   
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="write a Task" 
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <br/><br/>
                <textarea
                    name="description"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description}
                />
                <br/><br/>
                <input type="submit"/>
            </form>
        )
    }
}
