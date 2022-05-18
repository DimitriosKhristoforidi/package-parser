import React from 'react';
import { Space, Typography } from 'antd';
import PackageInput from '../../components/PackageInput';
import PackagesTable from '../../components/PackagesTable';

const { Title } = Typography;

const MainPage: React.FC = () => {
  return (
    <Space direction='vertical' size={20} style={{ width: '100%' }}>
      <Title level={2}>Package Parser</Title>
      <PackageInput />
      <PackagesTable />
    </Space>
  );
};

export default MainPage;
