import * as React from 'react';
import Modal from 'antd/lib/modal';

import { FormComponent } from './FormComponent';

export const ModalComponent = ({
  visible,
  toHide
}: {
  visible: boolean;
  toHide: (() => void);
}) => (
  <Modal title="Basic Modal" visible={visible} onOk={toHide} onCancel={toHide}>
    <FormComponent />
  </Modal>
);
