import firebase from 'firebase';

export const allPosts = callback => {
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

export const getPost = (postId, callback) => {
  const unsubscribe = firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .onSnapshot(docSnapshot => {
      callback({
        ...docSnapshot.data(),
        id: docSnapshot.id
      });
    });

  return unsubscribe;
};

export const createPost = async postObject => {
  return await firebase
    .firestore()
    .collection('posts')
    .add({
      ...postObject,
      date: firebase.firestore.Timestamp.fromDate(new Date())
    });
};

export const likePost = async (postId, likeObject) => {
  likeObject = {
    ...likeObject,
    date: firebase.firestore.Timestamp.fromDate(new Date())
  };

  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(likeObject)
    });
};

export const unlikePost = async (postId, likeObject) => {
  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayRemove(likeObject)
    });
};
