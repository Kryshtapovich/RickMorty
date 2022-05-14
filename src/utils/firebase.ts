import { firebase, FirebaseAuthTypes } from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

export function signIn(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signUp(
  userName: string,
  email: string,
  password: string
) {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await user.updateProfile({ displayName: userName });
}

export function signOut() {
  return firebase.auth().signOut();
}

export function onAuthStateChanged(
  listener: FirebaseAuthTypes.AuthListenerCallback
) {
  return firebase.auth().onAuthStateChanged(listener);
}

export function getUser() {
  return firebase.auth().currentUser;
}

export async function updateUser(model: FirebaseAuthTypes.UpdateProfile) {
  const { currentUser } = firebase.auth();
  const { photoURL: newPhoto, displayName } = model;

  if (currentUser) {
    const { photoURL: oldPhoto, email } = currentUser;
    let photoURL = oldPhoto;

    if (newPhoto) {
      oldPhoto && (await storage().ref(`images/${email}`).delete());

      const ref = storage().ref(`images/${email}`);
      const isCompletd = await ref.putFile(newPhoto);

      if (isCompletd) photoURL = await ref.getDownloadURL();
      currentUser.updateProfile({ photoURL });
    }

    await currentUser.updateProfile({ displayName, photoURL });
  }
}
