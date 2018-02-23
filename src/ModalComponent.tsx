import * as React from 'react';

import Form, { FormComponentProps } from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal';

import { AvatarUpload } from './AvatarUploadComponent';

export interface ModalProps extends FormComponentProps {
  visible: boolean;
  onAdd: () => void;
  onCancel: () => void;
  imageUpload: (image: string) => void;
}

const iconCSS = {
  color: '#ccc'
};

const ModalComponent = Form.create()((props: ModalProps) => {
  const { form, visible, onAdd, onCancel, imageUpload } = props;
  return (
    <Modal
      title="Add contact"
      visible={visible}
      okText="Add"
      onOk={onAdd}
      onCancel={onCancel}
    >
      <Form>
        <Form.Item>
          <AvatarUpload onUpload={imageUpload} />
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input a name!' }]
          })(
            <Input
              prefix={<Icon type="user" style={iconCSS} />}
              placeholder="Full Name"
            />
          )}
        </Form.Item>

        <Form.Item>
          {form.getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input a phone number!' }]
          })(
            <Input
              prefix={<Icon type="phone" style={iconCSS} />}
              placeholder="Phone"
              type="tel"
            />
          )}
        </Form.Item>

        <Form.Item>
          {form.getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input an address!' }]
          })(
            <Input
              prefix={<Icon type="environment-o" style={iconCSS} />}
              placeholder="Address"
            />
          )}
        </Form.Item>

        <Form.Item>
          {form.getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input an email!' }]
          })(
            <Input
              prefix={<Icon type="mail" style={iconCSS} />}
              placeholder="Email"
              type="email"
            />
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
});

export { ModalComponent };
