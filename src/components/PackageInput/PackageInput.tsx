import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { getPackagesData } from './utils';
import { TOnFinish } from './PackageInputTypes';
import { RootState } from '../../app/types';
import {
  setLoading,
  updatePackage,
} from '../../features/packages/packagesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const { TextArea } = Input;

const PackageInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.packages.loading);
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
        <Button loading={loading} type='primary' htmlType='submit'>
          Find
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PackageInput;
