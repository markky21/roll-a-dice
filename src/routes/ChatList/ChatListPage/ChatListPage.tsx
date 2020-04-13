import React, { useEffect } from 'react';
import { Grow } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { ChatList } from '../../../modules/ChatList/ChatList';
import { chatsSelectors } from '../../../store/chats/chats.selectors';
import { Chatter } from '../../../modules/Chatter';
import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';
import { locationSelectors } from '../../../store/location/location.selectors';

const styles = (theme: Theme) => ({
  cards: {
    marginBottom: '16px',
  },
});

const useStyles = makeStyles(styles);

interface ChatListProps {
  match: LocationMatch;
}

export function ChatListPageC(props: ChatListProps) {
  const { match } = props;
  const dispatch = useDispatch();
  const storeLocationMatch = useSelector(locationSelectors.match);

  useEffect(() => {
    if (JSON.stringify(match) !== JSON.stringify(storeLocationMatch)) {
      dispatch(locationActions.matchChange(match));
    }
  });

  const classes = useStyles();
  const selectedChat: string | null = useSelector(chatsSelectors.selectedChat);
  
  return (
    <React.Fragment>
      <Grow in={true}>
        <section className={classes.cards}>
          <ChatList />
        </section>
      </Grow>
      {!!selectedChat && (
        <section className={classes.cards}>
          <Chatter />
        </section>
      )}
    </React.Fragment>
  );
}
