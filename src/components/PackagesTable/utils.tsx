import React from 'react';
import { Tag } from 'antd';

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
    render: (keywords: string[]) => (
      <>
        {keywords?.map((keyword, id) => (
          <Tag color='blue' key={`${keyword}-${id}`}>
            {keyword.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: 'NPM link',
    dataIndex: 'links',
    key: 'links',
    render: (links: { npm: string }) => (
      <a target='_blank' rel='noreferrer' href={links.npm}>
        {links.npm}
      </a>
    ),
  },
];
