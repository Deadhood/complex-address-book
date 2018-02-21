import * as React from 'react';
import { Modal, Button } from 'antd';

export const ModalComponent = () => (
  <div>
    <Button type="primary">submit</Button>
    <Modal title="Basic Modal" visible={false}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </div>
);
