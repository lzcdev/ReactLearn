import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    val: '',
    list: []
  }
  handleChange = (event) => {
    let val = event.target.value
    this.setState({
      val
    })

  }
  handleAdd = () => {
    this.state.list.push(this.state.val)
    this.setState({
      list: this.state.list
    })
  }
  render () {
    return <div>
      <p>欢迎</p>
      <h1>Hello, World</h1>
      <input type="text" onChange={this.handleChange} value={this.state.val} />
      <button onClick={this.handleAdd}>添加</button>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  }
}

export default App;
