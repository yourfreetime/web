import firebase from 'firebase';

export const createUser = async userObject => {
  const idImage = Math.floor(Math.random() * 1000 + 1);

  const data = await firebase
    .auth()
    .createUserWithEmailAndPassword(userObject.email, userObject.password);

  const user = await firebase
    .firestore()
    .collection('users')
    .doc(data.user.uid)
    .set({
      ...userObject,
      picture: `https://i.picsum.photos/id/${idImage}/500/500.jpg`,
      dateCreated: firebase.firestore.Timestamp.fromDate(new Date()),
      dateUpdated: firebase.firestore.Timestamp.fromDate(new Date())
    });

  await firebase
    .auth()
    .signInWithEmailAndPassword(userObject.email, userObject.password);

  return user;
};

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
