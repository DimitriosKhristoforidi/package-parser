import React from 'react';
import { RootState } from '../../app/types';
import { useAppSelector } from '../../app/hooks';
import { Table, TableContainer } from '@mui/material';
import PackageTableHead from '../PackageTableHead';
import PackageTableBody from '../PackageTableBody';

const PackagesTable: React.FC = () => {
  const { packagesList } = useAppSelector((state: RootState) => state.packages);

  return (
    <TableContainer>
      <Table>
        <PackageTableHead />
        <PackageTableBody packagesList={packagesList} />
      </Table>
    </TableContainer>
  );
};

export default PackagesTable;
