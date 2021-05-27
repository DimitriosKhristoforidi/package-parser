import { Modal, Tag } from 'antd';
import API from '../../API';

export const columns = [
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

export const getPackagesData = async (list) => {
  if (list.length) {
    const promises = [];
    for (let i in list)
      promises.push(API.getPackage(list[i]));
    return await Promise.all(promises)
      .then(r => r.map(item => item.results[0].package));
  } else {
    Modal.error({ title: 'JSON is empty' });
  }
};
