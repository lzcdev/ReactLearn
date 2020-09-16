import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './home.scss'

export default function Home () {
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
  const data = []
  return <div className="home">
    <h1>语言大数据报告</h1>
    <div className="wrap">
      <div className="nav">
        <a className="checked" href="">语言动态</a>
        <a href="">语言地图</a>
        <a href="">语言热搜</a>
        <a href="">语言播报</a>
      </div>
      <p>数据纯属虚构</p>
      <Table bordered columns={columns} dataSource={data}></Table>
      <Link className="nav-link" to="/">回首页</Link>
    </div>
  </div>
}