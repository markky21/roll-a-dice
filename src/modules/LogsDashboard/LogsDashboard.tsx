import React from 'react';
import { Slide } from '@material-ui/core';

import { LogsTabs } from './components/LogsTabs';

export interface LogsDashboardProps {
  visible?: boolean;
}

export function LogsDashboard(props: LogsDashboardProps) {
  const { visible = true } = props;

  return (
    <Slide direction="right" in={visible}>
      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
        <LogsTabs />
      </div>
    </Slide>
  );
}
