import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            title: '',
            content: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, content } = this.state; 

        return (
            <div>
            <h3>Add New</h3>
            <form onSubmit={this.onFormSubmit}>
                <label for="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title"
                    value={title} 
                    onChange={this.handleChange} />
                <label for="content">Content</label>
                <input 
                    type="text" 
                    name="content" 
                    id="content"
                    value={content} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
            </div>
        );
    }
}

export default Form;
