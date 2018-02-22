import * as React from 'react';

import Form, { FormComponentProps } from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal';

export interface ModalProps extends FormComponentProps {
  visible: boolean;
  onAdd: () => void;
  onCancel: () => void;
}

const ModalComponent = Form.create()((props: ModalProps) => {
  const {form, visible, onAdd, onCancel} = props;
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      okText="Add"
      onOk={onAdd}
      onCancel={onCancel}
    >
      <Form>
        <Form.Item>
          {form.getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: '#ccc' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>

        <Form.Item>
          {form.getFieldDecorator('Phone', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="phone" style={{ color: '#ccc' }} />}
              placeholder="Phone"
            />
          )}
        </Form.Item>

        <Form.Item>
          {form.getFieldDecorator('Address', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={
                <Icon
                  type="environment-o"
                  style={{ color: '#ccc' }}
                />
              }
              placeholder="Address"
            />
          )}
        </Form.Item>

        <Form.Item>
          {form.getFieldDecorator('Email', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: '#ccc' }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('img', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="" style={{ color: '#ccc' }} />}
              placeholder="img"
            />
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
});

export { ModalComponent };
