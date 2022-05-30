import React, { useMemo } from 'react';
import {
  Chip,
  Grid,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { IPackageTableBody } from './PackageTableBodyTypes';

const PackageTableBody: React.FC<IPackageTableBody> = ({ packagesList }) => {
  const packagesListRender = useMemo(
    () =>
      packagesList.map((packageItem, idx) => (
        <TableRow key={idx}>
          <TableCell scope='row'>{packageItem.name}</TableCell>
          <TableCell>{packageItem.description}</TableCell>
          <TableCell>
            <Grid container spacing={1}>
              {packageItem.keywords.map((keyword, idx) => (
                <Grid item key={idx}>
                  <Chip label={keyword} />
                </Grid>
              ))}
            </Grid>
          </TableCell>
          <TableCell align='right'>
            <a target='_blank' href={packageItem.links.npm}>
              {packageItem.links.npm}
            </a>
          </TableCell>
        </TableRow>
      )),
    [packagesList],
  );

  return <TableBody>{packagesListRender}</TableBody>;
};

export default PackageTableBody;
