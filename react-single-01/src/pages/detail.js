import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import './app.scss'
import { Button } from "antd";
import 'antd/dist/antd.css'

export default function Detail () {
  const params = useParams()
  const history = useHistory()
  return <div className="container">
    <p>This is Detail</p>
    <p>当前参数为:{params.id}</p>

    <Button onClick={() => {
      history.push('/')
    }}>跳转首页</Button>
  </div>
}