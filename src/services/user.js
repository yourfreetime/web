import firebase from 'firebase';

export const getUser = async userId =>
  await firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .get();

export const getCurrentUser = callback => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const userObject = await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get();

      callback({
        ...userObject.data(),
        id: userObject.id
      });
    }
  });
};
