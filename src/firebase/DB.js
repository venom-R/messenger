import { db } from './core';
import { type } from '../utils/helpers';

const userFactory = user => ({
  firstName: user.firstName || user.displayName || '',
  lastName: user.lastName || '',
  email: user.email || '',
  photo: user.photoURL || '',
  phoneNumber: user.phoneNumber || '',
  socialMedia: {},
  roles: {},
});

export default class DB {
  static users = db.collection('users');

  static async createUser(uid, user) {
    return DB.updateUser(uid, userFactory(user), false);
  }

  static getUser(uid) {
    return DB.users.doc(uid).get();
  }

  static updateUser(uid, data, merge = true) {
    if (type(data) !== 'object') {
      throw new Error('Error in DB.updateUser: invalid type of data argument');
    }
    return DB.users.doc(uid).set(data, { merge });
  }
}
