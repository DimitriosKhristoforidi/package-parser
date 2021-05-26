import { Space, Typography } from 'antd';
import PackageInput from '../../components/PackageInput';
import PackagesTable from '../../components/PackagesTable';

const { Title } = Typography;

export default function MainPage() {
  return (
    <Space direction="vertical" size={20} style={{ width: '100%' }}>
      <Title level={2}>Package Parser</Title>
      <PackageInput />
      <PackagesTable />
    </Space>
  );

}
