import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

import { IDiceThrowResult } from '../../../models/dice.model';

interface DiceDashboardResultProps {
  throwResult: IDiceThrowResult | null;
}

function DiceDashboardResultC(props: DiceDashboardResultProps) {
  const { throwResult } = props;

  const renderResultItem = () => {
    if (!throwResult) {
      return '';
    }

    const resultObject: any = {};
    throwResult?.diceSet.forEach((diceName, id) => {
      resultObject[diceName] = [...(resultObject[diceName] || []), throwResult?.result[id]];
    });

    console.log({ resultObject });

    return Object.keys(resultObject).map(diceName => (
      <ListItem key={diceName}>
        <Typography variant="h2" component="div">
          {diceName}: {resultObject[diceName].join(', ')}
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
export const DiceDashboardResult = DiceDashboardResultC;
