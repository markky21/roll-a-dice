import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = createStyles({});

export interface RoomListsProps extends WithStyles<typeof styles> {}

export function RoomListC(props: RoomListsProps) {
  return <div></div>;
}

export const RoomList = withStyles(styles)(RoomListC);
