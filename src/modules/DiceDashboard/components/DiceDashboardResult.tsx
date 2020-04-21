import React from 'react';
import { Grid, List, ListItem, Typography } from '@material-ui/core';

import { IDiceThrow } from '../../../models/dice.model';

interface DiceDashboardResultProps {
  throwResult: IDiceThrow;
}

export function DiceDashboardResult(props: DiceDashboardResultProps) {
  const { throwResult } = props;

  const renderResultItem = () => {
    if (!throwResult?.result) {
      return '';
    }

    return Object.keys(throwResult.result).map(diceName => (
      <ListItem key={diceName}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4" component="span" color={'textSecondary'}>
              {diceName}:
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" component="span">
              {throwResult.result[diceName].join(', ')}
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
    ));
  };

  return (
    <article>
      <Typography variant="h5" component="h2">
        Throw result:
      </Typography>
      <List>{renderResultItem()}</List>
    </article>
  );
}
