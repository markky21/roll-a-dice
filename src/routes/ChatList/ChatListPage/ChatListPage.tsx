import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { Chatter } from '../../../modules/Chatter/Chatter';
import { ChatList } from '../../../modules/ChatList/ChatList';
import { chatsSelectors } from '../../../store/chats/chats.selectors';
import { locationSelectors } from '../../../store/location/location.selectors';
import { locationActions } from '../../../store/location/location.actions';
import { LocationMatch } from '../../../store/location/location.model';

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
      <section className={classes.cards}>
        <ChatList />
      </section>
      {!!selectedChat && (
        <section className={classes.cards}>
          <Chatter />
        </section>
      )}
    </React.Fragment>
  );
}
