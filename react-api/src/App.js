import React, {Component} from 'react';
import Contents from './components/contents';
import Form from './Form';

class App extends Component {
    render() {
        return ( 
                <div>
            	<Contents contents={this.state.contents} />
            	<Form handleSubmit={this.handleSubmit} />
                </div>
        );
    }

    state = {
        contents: []
    };

    handleSubmit = blog => {
        this.setState({contents: [...this.state.contents, blog]});
        fetch('http://127.0.0.1:5050/blog', {
          method: 'POST',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
          },
          body: JSON.stringify({
		title: blog.title,
		content: blog.content
                
          })
       })
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5050/blog')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contents: data })
            })
            .catch(console.log)
    }
}
export default App;
