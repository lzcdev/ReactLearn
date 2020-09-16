import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import axios from 'axios'
const FormItem = Form.Item

export default function Login () {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const history = useHistory()

  return <Form className="login-form">
    <FormItem>
      <Input placeholder="请输入用户名" maxLength={5} onChange={(event) => {
        setName(event.target.value)
      }}></Input>
    </FormItem>

    <FormItem>
      <Input placeholder="请输入密码" maxLength={18} type="password" onChange={(event) => {
        setPwd(event.target.value)
      }}></Input>
    </FormItem>
    <label>{name} ------ {pwd}</label>
    <FormItem>
      <Button type="primary" onClick={() => {
        login(name, pwd).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            history.push('/home')
          }
        })
      }}>登录</Button>
    </FormItem>
  </Form>
}

const login = (name, pwd) => {
  return axios.get("/login.json", {
    params: { name, pwd }
  })
}