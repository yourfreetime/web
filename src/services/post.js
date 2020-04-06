import firebase from 'firebase';

export const getPost = callback => {
  const unsubscribe = firebase
    .firestore()
    .collection('posts')
    .orderBy('date', 'desc')
    .onSnapshot(querySnapshot => {
      const docs = querySnapshot.docs.map(documentSnapshot => ({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
        key: documentSnapshot.id
      }));

      callback(docs);
    });

  return unsubscribe;
};

export const createPost = async postObject => {
  return await firebase
    .firestore()
    .collection('posts')
    .add({
      ...postObject,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
};
