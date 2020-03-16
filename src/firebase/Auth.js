import { firebase, auth } from './core';
import DB from './DB';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export default class Auth {
  static async createUser(firstName, lastName, email, password) {
    const authUser = await auth.createUserWithEmailAndPassword(email, password);
    await DB.createUser(authUser.user.uid, { firstName, lastName, email });
    return authUser;
  }

  static sendEmailVerification() {
    return auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });
  }

  static signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  static async signInWithProvider(provider) {
    const authUser = await auth.signInWithPopup(provider);
    if (authUser.additionalUserInfo.isNewUser) {
      return DB.createUser(authUser.user.uid, authUser.user);
    }
    return authUser;
  }

  static async signInWithGoogle() {
    return Auth.signInWithProvider(googleProvider);
  }

  static async signInWithGithub() {
    return Auth.signInWithProvider(githubProvider);
  }

  static signOut() {
    return auth.signOut();
  }

  static passwordReset(email) {
    return auth.sendPasswordResetEmail(email, {
      url: process.env.REACT_APP_RESET_PASSWORD_REDIRECT,
    });
  }

  static passwordUpdate(password) {
    return auth.currentUser.updatePassword(password);
  }

  static onAuthUserListener(handler) {
    return auth.onAuthStateChanged(authUser => {
      handler(authUser);
    });
  }

  static getAuthUser() {
    return new Promise(resolve => auth.onAuthStateChanged(user => resolve(user)));
  }
}
