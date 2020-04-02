import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { ChatList } from '../../../modules/ChatList/ChatList';
import { Chatter } from '../../../modules/Chat/Chatter';
import { useSelector } from 'react-redux';
import { chatsSelectors } from '../../../store/chats/chats.selectors';

const styles = (theme: Theme) => ({
  cards: {
    marginBottom: '16px',
  },
});

const useStyles = makeStyles(styles);

interface ChatListProps {}

export function ChatListPageC(props: ChatListProps) {
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
