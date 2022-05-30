import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { IAlertBox } from './AlertBoxTypes';

const AlertBox: React.FC<IAlertBox> = ({ content }) => {
  return (
    <div>
      <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        {content}
      </Alert>
    </div>
  );
};

export default AlertBox;
