import React, { useContext, useEffect } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { DiceService } from '../services/dice.service';
import { firebaseSelectors } from '../store/firebase/firebase.selectors';
import { roomsSelectors } from '../store/rooms/rooms.selectors';
import { ToastContext } from './Toast.context';

export const DiceServiceContext = React.createContext<DiceService | null>(null);

interface DiceServiceContextProps {}

export const DiceServiceContextC: React.FC<DiceServiceContextProps> = ({ children }) => {
  const firestore = useFirestore();
  const Toast = useContext(ToastContext);

  const diceService = DiceService.getInstance(firestore, Toast);
  const profile = useSelector(firebaseSelectors.userProfile$);
  const roomUid = useSelector(roomsSelectors.selectedRoomUid$);

  useEffect(() => {
    diceService.profile = profile;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  useEffect(() => {
    diceService.roomUid = roomUid || null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomUid]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => diceService.hostDestroyed(), []);

  return <DiceServiceContext.Provider value={diceService}>{children}</DiceServiceContext.Provider>;
};
