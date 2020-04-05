import React, { FormEvent, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    block: {
      display: 'block',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
  });

interface ChatInputBoxProps extends WithStyles<typeof styles> {
  onNewMessage: (message: string) => void;
}

function ChatInputBoxC(props: ChatInputBoxProps) {
  const { classes, onNewMessage } = props;

  const [message, setMessage] = useState<string>('');

  const handleNewMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.length) {
      onNewMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={e => handleNewMessage(e)}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <CreateIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              id="ChatInputBox"
              fullWidth
              placeholder="Type message.."
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid item>
            <label htmlFor="ChatInputBox">
              <IconButton
                color="primary"
                aria-label="send message"
                component="span"
                onClick={(e: any) => handleNewMessage(e)}
              >
                <SendIcon className={classes.block} color="inherit" />
              </IconButton>
            </label>
          </Grid>
        </Grid>
      </Toolbar>
    </form>
  );
}

export const ChatInputBox = withStyles(styles)(ChatInputBoxC);
