import React, { useContext } from 'react';
import { Table } from 'antd';
import { ContextApp } from '../../App';
import { columns } from './utils';

const PackagesTable: React.FC = () => {
  const { state } = useContext(ContextApp);
  const { loading, packagesList } = state;

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
