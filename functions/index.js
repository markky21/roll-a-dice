const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp();
const db = admin.firestore();
const dbFirebase = admin.database();
const initialApplicationStats = { players: 0, rooms: 0, diceThrows: 0 };

/**
 * On Room Create
 */
exports.onRoomCreateCreateChat = functions.firestore.document('rooms/{roomId}').onCreate((roomSnapshot, context) => {
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

exports.onRoomCreateUpdateAppStats = functions.firestore.document('rooms/{roomId}').onCreate(roomSnapshot => {
  const applicationStatsRef = dbFirebase.ref('applicationStats');
  return applicationStatsRef.once('value').then(snapshot => {
    const stats = { ...initialApplicationStats, ...snapshot.val() };
    return applicationStatsRef.update({
      ...stats,
      rooms: stats.rooms + 1,
    });
  });
});

/**
 * On Room Update
 */
exports.onRoomUpdatePlayersUpdateChat = functions.firestore
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
    return Promise.resolve();
  });

exports.onRoomUpdateLogsUpdateAppStats = functions.firestore
  .document('rooms/{roomId}')
  .onUpdate((roomSnapshot, context) => {
    const roomAfter = roomSnapshot.after.data();
    const roomBefore = roomSnapshot.before.data();
    const lastLogBefore = [...roomBefore.logs].pop();
    const lastLogAfter = [...roomAfter.logs].pop();

    if (Boolean(lastLogAfter) && lastLogAfter.type === 'DICE_ROLL') {
      if (!lastLogBefore || lastLogAfter.timestamp !== lastLogBefore.timestamp) {
        const applicationStatsRef = dbFirebase.ref('applicationStats');
        return applicationStatsRef.once('value').then(snapshot => {
          const stats = { ...initialApplicationStats, ...snapshot.val() };
          return applicationStatsRef.update({
            ...stats,
            diceThrows: stats.diceThrows + 1,
          });
        });
      }
    }
    return Promise.resolve();
  });

/**
 * On Users Create
 */
exports.onUserCreateCopyUid = functions.firestore.document('users/{userId}').onCreate(userSnapshot => {
  const userRef = db.doc(`users/${userSnapshot.id}`);

  return userRef.get().then(uSnapshot => {
    return userRef.update({ uid: userSnapshot.id });
  });
});


exports.onUserCreateUpdateAppStats = functions.firestore.document('users/{userId}').onCreate(userSnapshot => {
  const applicationStatsRef = dbFirebase.ref('applicationStats');
  return applicationStatsRef.once('value').then(snapshot => {
    const stats = { ...initialApplicationStats, ...snapshot.val() };
    return applicationStatsRef.update({
      ...stats,
      players: stats.players + 1,
    });
  });
});
