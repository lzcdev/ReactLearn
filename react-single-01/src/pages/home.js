import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.scss'
import axios from 'axios'

export default function Home () {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)

  const columns = [{
    title: '地区',
    dataIndex: 'area'
  }, {
    title: 'Java',
    dataIndex: 'java'
  }, {
    title: 'PHP',
    dataIndex: 'php'
  }, {
    title: 'Node',
    dataIndex: 'node'
  }, {
    title: 'Object-C',
    dataIndex: 'oc'
  }, {
    title: 'Python',
    dataIndex: 'python'
  }]
  useEffect(() => {
    axios.get('./data.json').then(res => {
      console.log(res)
      if (res.data.code === 0) {
        setData(res.data.data)
      }
    })
  }, [])
  return <div className="home">
    <h1>语言大数据报告</h1>
    <div className="wrap">
      <div className="nav">
        <a className={index === 0 ? "checked" : ''} onClick={() => { setIndex(0) }} href="/#">语言动态</a>
        <a className={index === 1 ? "checked" : ''} onClick={() => { setIndex(1) }} href="/#">语言地图</a>
        <a className={index === 2 ? "checked" : ''} onClick={() => { setIndex(2) }} href="/#">语言热搜</a>
        <a className={index === 3 ? "checked" : ''} onClick={() => { setIndex(3) }} href="/#">语言播报</a>
      </div>
      <p>数据纯属虚构</p>
      <Table bordered pagination={false} columns={columns} dataSource={data}></Table>
      <Link className="nav-link" to="/">回首页</Link>
    </div>
  </div>
}