import React, { ChangeEventHandler, useMemo, useState } from 'react';
import { Button, CircularProgress, Stack, TextField } from '@mui/material';
import { RootState } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPackages } from '../../features/packages/packageSliceAsync';
import { packageFormInputs, packageFormSubmitButton } from './constants';
import AlertBox from '../AlertBox';
import { clearAlertMessage } from '../../features/packages/packagesSlice';

const PackageInputForm: React.FC = () => {
  const [dependenciesTerm, setDependenciesTerm] = useState<string>('');
  const dispatch = useAppDispatch();
  const { loading, alertMessage } = useAppSelector(
    (state: RootState) => state.packages,
  );

  const { dependencies } = packageFormInputs;

  const handleSubmit = () => {
    dispatch(fetchPackages(dependenciesTerm));
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setDependenciesTerm(e.target.value);
    dispatch(clearAlertMessage());
  };

  const isButtonDisabled = useMemo(
    () => loading || !dependenciesTerm,
    [loading, dependenciesTerm],
  );
  const buttonChildren = useMemo(
    () =>
      loading ? (
        <CircularProgress color='inherit' size={22} />
      ) : (
        packageFormSubmitButton.label
      ),
    [loading, isButtonDisabled],
  );

  return (
    <Stack spacing={2}>
      {alertMessage && <AlertBox content={alertMessage} />}
      <TextField
        multiline
        variant='outlined'
        onChange={handleChange}
        label={dependencies.label}
        placeholder={dependencies.placeholder}
      />
      <Button
        disabled={isButtonDisabled}
        onClick={handleSubmit}
        variant='contained'
      >
        {buttonChildren}
      </Button>
    </Stack>
  );
};

export default PackageInputForm;
