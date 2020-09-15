import React from 'react';
import { Input, Button, Select } from 'antd'
import 'antd/dist/antd.css'
import './demo1.scss';
const Search = Input.Search
const Option = Select.Option

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
  handleSearch = value => {
    console.log(value);
    this.state.list.push(value)
    this.setState({
      list: this.state.list
    })
  }
  render () {
    const { list } = this.state
    const options = []
    list.map((item, index) => {
      return options.push(<Option key={index}>{item}</Option>)
    })
    return <div>
      <p>欢迎</p>
      <h1>Hello, World</h1>
      <Input type="text" style={{ width: 300 }} onChange={this.handleChange} value={this.state.val} />
      <Button type="primary" onClick={this.handleAdd}>添加</Button>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <div>
        <Search style={{ width: 350 }} onSearch={this.handleSearch} enterButton="添加"></Search>
        <br />
        <Select style={{ width: 150 }}>
          {options}
        </Select>
      </div>
    </div>
  }
}

export default App;
