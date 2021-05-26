import { useContext, useEffect, useState } from 'react';
import { ContextApp } from '../../store/reducer';
import API from '../../API';
import { Table, Tag } from 'antd';
import { setLoading } from '../../store/actions';

const columns = [
  {
    title: 'Title',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '40%',
  },
  {
    title: 'Tags',
    dataIndex: 'keywords',
    key: 'keywords',
    render: keywords => (
      <>
          {
            keywords?.map(tag =>
              <Tag color="blue" key={tag}>
                {tag.toUpperCase()}
              </Tag>,
            )
          }
        </>
    ),
  },
  {
    title: 'NPM link',
    dataIndex: 'links',
    key: 'links',
    render: links => (
      <a target="_blank" rel="noreferrer" href={links.npm}>{links.npm}</a>
    ),
  },
];

const getPackagesData = async (state, dispatch, setPackagesData) => {
  if (state.packageList.length) {
    dispatch(setLoading(true));
    const promises = [];
    for (let i in state.packageList)
      promises.push(API.getPackage(state.packageList[i]));
    await Promise.all(promises).then(r => {
      const packagesData = r.map(item => item.results[0].package);
      setPackagesData(packagesData);
    });
    dispatch(setLoading(false));
  }
};

export default function PackagesTable() {
  const { dispatch, state } = useContext(ContextApp);
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    getPackagesData(state, dispatch, setPackagesData);
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
