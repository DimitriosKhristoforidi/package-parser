import { useContext } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { ContextApp } from '../../store/reducer';
import { updatePackage } from '../../store/actions';

const { TextArea } = Input;

export default function PackageInput() {
  const { dispatch, state } = useContext(ContextApp);
  const [form] = Form.useForm();

  const onFinish = async (e) => {
    try {
      const packageObject = JSON.parse(e.package);
      dispatch(updatePackage(Object.keys(packageObject)));
    } catch (e) {
      Modal.error({ title: 'Not a json' });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item name="package" required>
        <TextArea allowClear autoSize={{ minRows: 2 }} placeholder='Insert dependencies json: { "react": "^17.0.2" }' />
      </Form.Item>
      <Form.Item>
        <Button loading={state.loading} type="primary" htmlType="submit">Find</Button>
      </Form.Item>
    </Form>
  );

}
