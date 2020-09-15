import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './app.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'

export default function App () {
  const [count, setCount] = useState(10)

  useEffect(() => {
    console.log('执行了useEffect');
  }, [])
  return <div className="container">
    <h1>欢迎来到腾讯课堂</h1>
    <Link to="/login">点击跳转到Login页面</Link>
    <br />
    <Link to="/home">点击跳转到Home页面</Link>
    <br />
    <p>
      当前count次数：{count}
    </p>
    <Button onClick={() => { setCount(count + 1) }}>更新次数</Button>
  </div>
}
// 有状态的组件
// export default class App extends React.Component {

//   handleJump = () => {
//     this.props.history.push('/login')
//   }

//   render () {
//     return <div class="container">
//       <h1>欢迎来到腾讯课堂</h1>
//       <Link to="/login">点击跳转到Login页面</Link>
//       <br />
//       <Link to="/home">点击跳转到Home页面</Link>
//       <br />
//       <Button onClick={this.handleJump}>登录</Button>
//     </div>
//   }
// }