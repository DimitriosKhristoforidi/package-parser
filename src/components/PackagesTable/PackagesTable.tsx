import React from 'react';
import { Table } from 'antd';
import { columns } from './utils';
import { RootState } from '../../app/types';
import { useAppSelector } from '../../app/hooks';

const PackagesTable: React.FC = () => {
  const { loading, packagesList } = useAppSelector(
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
