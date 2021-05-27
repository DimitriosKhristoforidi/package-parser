import { useContext, useEffect, useState } from 'react';
import { ContextApp } from '../../store/reducer';
import { setLoading } from '../../store/actions';
import { Table } from 'antd';
import { columns, getPackagesData } from './utils';

export default function PackagesTable() {
  const { dispatch, state } = useContext(ContextApp);
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    dispatch(setLoading(true));
    getPackagesData(state.packageList)
      .then(r => {
        setPackagesData(r);
        dispatch(setLoading(false));
      });
    // eslint-disable-next-line
  }, [state.packageList]);

  return (
    <div className="App">
      <Table
        loading={state.loading}
        columns={columns}
        dataSource={packagesData}
        pagination={false}
        bordered
        rowKey={'name'}
      />
    </div>
  );
}
