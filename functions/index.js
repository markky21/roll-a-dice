const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/*

export interface IChat {
  roomName: string;
  createdAt: string;
  messages: IChatMessage[];
  roomUid: string;
  players: string[];
}


export interface IRoom extends IRoomCreateForm {
  createdAt: string;
  gameMaster: IProfile;
  players: string[];
  logs: IRoomLog[];
  roomName: string;
  diceType: Dice[];
  description: string;
  chatUid
}
*/

admin.initializeApp();
const db = admin.firestore();

exports.createChatOnRoomCreate = functions.firestore.document('rooms/{roomId}').onCreate((roomSnapshot, context) => {
  const data = roomSnapshot.data();

  const chat = {
    roomName: data.roomName,
    createdAt: Date.now().toString(),
    messages: [],
    roomUid: roomSnapshot.id,
    players: [data.gameMaster.uid],
  };
  return db
    .collection('chats')
    .add(chat)
    .then(chatData => roomSnapshot.ref.update({ chatUid: chatData.id }));
});

exports.onRoomPlayersUpdateUpdateChat = functions.firestore
  .document('rooms/{roomId}')
  .onUpdate((roomSnapshot, context) => {
    const roomAfter = roomSnapshot.after.data();
    const roomBefore = roomSnapshot.before.data();
    const PlayersBefore = roomBefore.players;
    const PlayersAfter = roomAfter.players;

    if (JSON.stringify(PlayersBefore) !== JSON.stringify(PlayersAfter && Boolean(roomBefore.chatUid))) {
      const chatRef = db.doc(`chats/${roomBefore.chatUid}`);

      return chatRef.get().then(chatSnapshot => {
        return chatSnapshot.exists
          ? chatRef.update({ players: [roomAfter.gameMaster.uid, ...roomSnapshot.after.data().players] })
          : null;
      });
    }
  });

exports.onCreateUserCopyUid = functions.firestore.document('users/{userId}').onCreate(userSnapshot => {
  const userRef = db.doc(`users/${userSnapshot.id}`);

  return userRef.get().then(uSnapshot => {
    return userRef.update({ uid: userSnapshot.id });
  });
});
