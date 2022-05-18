import React, { useContext } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { ContextApp } from '../../App';
import { setLoading, updatePackage } from '../../store/actions';
import { getPackagesData } from './utils';
import { TOnFinish } from './PackageInputTypes';

const { TextArea } = Input;

const PackageInput: React.FC = () => {
  const { dispatch, state } = useContext(ContextApp);
  const [form] = Form.useForm();

  const onFinish: TOnFinish = async (e) => {
    const packages = Object.keys(JSON.parse(e.package));
    dispatch(setLoading(true));
    getPackagesData(packages)
      .then((r) => dispatch(updatePackage(r)))
      .catch((e) => Modal.error({ title: e }))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <Form form={form} layout='vertical' onFinish={onFinish}>
      <Form.Item name='package' required>
        <TextArea
          allowClear
          autoSize={{ minRows: 2 }}
          placeholder='Insert dependencies json: { "react": "^17.0.2" }'
        />
      </Form.Item>
      <Form.Item>
        <Button loading={state.loading} type='primary' htmlType='submit'>
          Find
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PackageInput;
