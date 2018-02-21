import * as React from 'react';
import { Form, Icon, Input } from 'antd';
// import './App.css';

export const FormComponent = Form.create()(({ form }) => (
  <Form>
    <Form.Item>
      {form.getFieldDecorator('userName', {
        rules: [{ required: true, message: 'Please input your username!' }]
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      )}
    </Form.Item>

    <Form.Item>
      {form.getFieldDecorator('Phone', {
        rules: [{ required: true, message: 'Please input your username!' }]
      })(
        <Input
          prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Phone"
        />
      )}
    </Form.Item>

    <Form.Item>
      {form.getFieldDecorator('Address', {
        rules: [{ required: true, message: 'Please input your username!' }]
      })(
        <Input
          prefix={<Icon type="environment-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Address"
        />
      )}
    </Form.Item>

    <Form.Item>
      {form.getFieldDecorator('Email', {
        rules: [{ required: true, message: 'Please input your username!' }]
      })(
        <Input
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />
      )}
    </Form.Item>
    <Form.Item>
      {form.getFieldDecorator('img', {
        rules: [{ required: true, message: 'Please input your username!' }]
      })(
        <Input
          prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="img"
        />
      )}
    </Form.Item>
  </Form>
));
