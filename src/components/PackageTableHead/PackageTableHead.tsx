import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

const PackageTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Maintainers</TableCell>
        <TableCell align='right'>Homepage</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PackageTableHead;
