import React from 'react';
import { Slide } from '@material-ui/core';

import { LogsTabs } from './components/LogsTabs';

export interface LogsDashboardProps {
  visible?: boolean;
}

function LogsDashboardC(props: LogsDashboardProps) {
  const { visible = true } = props;

  return (
    <Slide direction="left" in={visible}>
      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: 10 }}>
        <LogsTabs />
      </div>
    </Slide>
  );
}

export const LogsDashboard = React.memo(LogsDashboardC);
