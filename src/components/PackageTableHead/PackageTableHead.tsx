import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const PackageTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Tags</TableCell>
        <TableCell align='right'>NPM link</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PackageTableHead;
