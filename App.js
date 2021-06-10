import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://localhost:5000/meetings');
    const result = await response.json();
    console.error(result);
    this.setState(result);
  }
  
  render() {
    return (
      <div className='container'>
        <Table resultData={this.state} />
      </div>
    )
  }
}

export default App