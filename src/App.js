import './App.css';
import axios from 'axios';
import React from 'react'
import Header from './app/components/header';

class App extends React.Component {
  state = { details: [], }
  componentDidMount() {
    let data;
    axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        console.log(res.data);
        this.setState({
          details: data
        })
      })
      .catch(err => {
        console.error(err);
      })
  }
  render() {
    return (
      <div>
        <Header/>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.email}</h2>
              <h3>{output.name}</h3>
            </div>
          </div>
        ))}
      </div>

    )
  }
}

export default App;
