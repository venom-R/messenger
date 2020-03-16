import { firebase, auth } from './core';
import DB from './DB';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

const userFactory = user => ({
  firstName: user.firstName || user.displayName || '',
  lastName: user.lastName || '',
  email: user.email || '',
  photo: user.photoURL || '',
  phoneNumber: user.phoneNumber || '',
  socialMedia: {},
  roles: {},
});

export default class Auth {
  static async createUser(firstName, lastName, email, password) {
    const newUserData = userFactory({ firstName, lastName, email });
    const authUser = await auth.createUserWithEmailAndPassword(email, password);
    await DB.createUser(authUser.user.uid, newUserData);
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
      const newUserData = userFactory(authUser.user);
      return DB.createUser(authUser.user.uid, newUserData);
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
