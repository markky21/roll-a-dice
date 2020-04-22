import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Box, Slide, Tab, Tabs, Typography, useTheme } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { LogsTimeline } from './LogsTimeline';
import { useSelector } from 'react-redux';

import { firestoreSelectors } from '../../../store/firebase/firestore.selectors';
import { LogsByPlayers } from './LogsByPlayers';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      height: '100%',
      position: 'relative' as 'relative',
      zIndex: 10,
      overflow: 'hidden',
    },
    bar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    tab: {
      overflowX: 'hidden',
      height: `calc(100% - ${theme.spacing(6)}px)`,
      overflowY: 'scroll',
    },
    tabContent: {
      margin: theme.spacing(-3),
    },
  });

export interface LogsTabsProps extends WithStyles<typeof styles> {
  visible?: boolean;
}

function LogsTabsC(props: LogsTabsProps) {
  const { classes, visible = true } = props;

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const profiles = useSelector(firestoreSelectors.usersProfiles);
  const logs = useSelector(firestoreSelectors.selectedRoomLogs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Slide direction="right" in={visible}>
      <Paper className={classes.root} elevation={2}>
        <AppBar className={classes.bar} position="static" color="default" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Logs Timeline" {...a11yProps(0)} />
            <Tab label="Players Logs" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <div className={classes.tab}>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className={classes.tabContent}>
                <LogsTimeline profiles={profiles} logs={logs} />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className={classes.tabContent}>
                <LogsByPlayers profiles={profiles} logs={logs} />
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </Paper>
    </Slide>
  );
}

export const LogsTabs = withStyles(styles)(LogsTabsC);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
