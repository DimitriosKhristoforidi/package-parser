import React from 'react';
import { Table } from 'antd';
import { columns } from './utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/types';

const PackagesTable: React.FC = () => {
  const { loading, packagesList } = useSelector(
    (state: RootState) => state.packages,
  );

  return (
    <div className='App'>
      <Table
        loading={loading}
        columns={columns}
        dataSource={packagesList}
        pagination={false}
        bordered
        rowKey={'name'}
      />
    </div>
  );
};

export default PackagesTable;
