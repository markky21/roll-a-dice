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

exports.createChatOnRoomCreate = functions.firestore.document('rooms/{roomId}').onCreate((snapshot, context) => {
  const data = snapshot.data();

  const chat = {
    roomName: data.roomName,
    createdAt: Date.now().toString(),
    messages: [],
    roomUid: snapshot.id,
    players: [data.gameMaster.uid],
  };
  return db
    .collection('chats')
    .add(chat)
    .then(chatData => snapshot.ref.update({ chatUid: chatData.id }));
});

//TODO: test this function
exports.onRoomPlayersUpdateUpdateChat = functions.firestore.document('rooms/{roomId}').onUpdate((snapshot, context) => {
  const roomAfter = snapshot.after.data();
  const PlayersBefore = snapshot.before.data().players;
  const PlayersAfter = snapshot.after.data().players;

  if (JSON.stringify(PlayersBefore) !== JSON.stringify(PlayersAfter)) {
    const chatRef = db.doc(`chats/${roomAfter.chatUid}`);
    return chatRef.update({ players: [roomAfter.gameMaster.uid, ...snapshot.after.data().players] });
  }
});
