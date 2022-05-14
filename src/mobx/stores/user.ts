import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { makeAutoObservable } from "mobx";

export class UserStore {
  user: FirebaseAuthTypes.User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: FirebaseAuthTypes.User | null) => {
    this.user = user;
  };
}
