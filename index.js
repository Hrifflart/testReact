import React, {Component} from 'react';
import ReactDOM from 'react-dom'



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Name: '',
        Start_hour: '',
        End_hour: '',
        Topic: '',
        Link: '',
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      const n = e.target.name
      this.setState({
        [n]: e.target.value
      })
    }

    handleSubmit (e) {
      e.preventDefault()
      const data = JSON.stringify(this.state)
      this.setState({
        Name: '',
        Start_hour: '',
        End_hour: '',
        Topic: '',
        Link: '',
      })
    }
  
    render() {
      return (
        <div>
          <h1>Meetings : </h1>
          
          <div>
            <label htmlFor="name">Name </label>
            <input type="text" value={this.state.name} onChange={this.handleChange} id="name" name="Name"/><br></br><br></br>
          </div>

          <div>
            <label htmlFor="start_hour">Start hour </label>
            <input type="text" value={this.state.start_hour} onChange={this.handleChange} id="start_hour" name="Start_hour"/><br></br><br></br>
          </div>
          
          <div>
            <label htmlFor="end_hour">End hour </label>
            <input type="text" value={this.state.end_hour} onChange={this.handleChange} id="end_hour" name="End_hour"/><br></br><br></br>
          </div>

          <div>
            <label htmlFor="topic">Topic </label>
            <input type="text" value={this.state.topic} onChange={this.handleChange} id="topic" name="Topic"/><br></br><br></br>
          </div>

          <div>
            <label htmlFor="link">Link </label>
            <input type="text" value={this.state.link} onChange={this.handleChange} id="link" name="Link"/><br></br><br></br>
          </div>

          <div>
            <input type="submit" value="save" />
          </div>
          
          {JSON.stringify(this.state)}
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'))