import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

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
        <Typography variant="h2" component="div">
          {diceName}: {throwResult.result[diceName].join(', ')}
        </Typography>
      </ListItem>
    ));
  };

  return (
    <article>
      <h2>Throw result:</h2>
      <List>{renderResultItem()}</List>
    </article>
  );
}
