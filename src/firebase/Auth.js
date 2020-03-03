import { firebase, auth } from './core';
import DB from './DB';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider(); // TODO token

export default class Auth {
  static createUser(firstName, lastName, email, password) {
    const newUserData = {
      firstName,
      lastName,
      email,
      roles: {},
    };
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser);
        return DB.createUser(authUser.user.uid, newUserData);
      })
      .then(() => Auth.sendEmailVerification());
  }

  static sendEmailVerification() {
    return auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });
  }

  static signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  static signInWithGoogle() {
    return auth.signInWithPopup(googleProvider);
  }

  static signInWithGithub() {
    return auth.signInWithPopup(githubProvider);
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
}