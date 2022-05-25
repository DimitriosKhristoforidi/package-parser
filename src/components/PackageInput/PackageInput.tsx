import React from 'react';
import { Button, Form, Input } from 'antd';
import { TOnFinish } from './PackageInputTypes';
import { RootState } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPackages } from '../../features/packages/packageSliceAsync';
import { packageFormInputs, packageFormSubmitButton } from './contants';

const { TextArea } = Input;

const PackageInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.packages.loading);
  const [form] = Form.useForm();

  const { dependencies } = packageFormInputs;

  const onFinish: TOnFinish = (e) => {
    dispatch(fetchPackages(e[dependencies.name]));
  };

  return (
    <Form form={form} layout='vertical' onFinish={onFinish}>
      <Form.Item name={dependencies.name} required>
        <TextArea
          allowClear
          autoSize={{ minRows: 2 }}
          placeholder={dependencies.placeholder}
        />
      </Form.Item>
      <Form.Item>
        <Button loading={loading} type='primary' htmlType='submit'>
          {packageFormSubmitButton.label}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PackageInput;
