import React from 'react';
import PackageInput from '../../components/PackageInputForm';
import PackagesTable from '../../components/PackagesTable';
import { mainHeading } from './constants';
import { Stack, Typography } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <Stack spacing={5}>
      <Typography variant='h2' component='h2'>
        {mainHeading}
      </Typography>
      <PackageInput />
      <PackagesTable />
    </Stack>
  );
};

export default MainPage;
