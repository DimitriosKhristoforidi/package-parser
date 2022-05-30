import React, { useMemo } from 'react';
import { Chip, Grid, TableBody, TableCell, TableRow } from '@mui/material';
import { IPackageTableBody } from './PackageTableBodyTypes';

const PackageTableBody: React.FC<IPackageTableBody> = ({ packagesList }) => {
  const packagesListRender = useMemo(
    () =>
      packagesList.map((packageItem, idx) => (
        <TableRow key={idx}>
          <TableCell scope='row'>{packageItem.name}</TableCell>
          <TableCell>{packageItem.description}</TableCell>
          <TableCell>{packageItem.author?.name}</TableCell>
          <TableCell>
            <Grid container spacing={1}>
              {packageItem.maintainers.map((maintainer, idx) => (
                <Grid item key={idx}>
                  <Chip
                    color='primary'
                    variant='outlined'
                    label={maintainer.name}
                    size='small'
                  />
                </Grid>
              ))}
            </Grid>
          </TableCell>
          <TableCell align='right'>
            <a target='_blank' href={packageItem.homepage}>
              {packageItem.homepage}
            </a>
          </TableCell>
        </TableRow>
      )),
    [packagesList],
  );

  return <TableBody>{packagesListRender}</TableBody>;
};

export default PackageTableBody;
