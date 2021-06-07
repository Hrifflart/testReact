import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://localhost:5000/meetings');
    const result = await response.json();
    this.setState(result);
  }
  
  render() {
    const characters = [
      {
        user: 'hugo',
        start_hour: '16h',
        end_hour: '16h30',
        topic: 'azetsfdg',
        link: 'lien.1',
      },
      {
        user: 'hugo',
        start_hour: '14h',
        end_hour: '14h30',
        topic: 'fhjfd',
        link: 'lien.2',
      },
      {
        user: 'riff',
        start_hour: '16h',
        end_hour: '16h30',
        topic: 'azetsfdg',
        link: 'lien.3',
      },
      {
        user: 'riff',
        start_hour: '19h',
        end_hour: '19h30',
        topic: 'zghjvgh',
        link: 'lien.4',
      },
      {
        user: 'hugo',
        start_hour: '21h',
        end_hour: '21h30',
        topic: 'wxdrfyrfg',
        link: 'lien.5',
      },
    ]
    return (
      <div className='container'>
        <Table  characterData={characters} resultData={this.state} />
      </div>
    )
  }
}

export default App