import { db } from './core';
import { type } from '../utils/helpers';

export default class DB {
  static users = db.collection('users');

  static async createUser(uid, user) {
    const userByUid = await DB.getUser(uid);
    if (!userByUid.exists) {
      return DB.updateUser(uid, user, false);
    }
    return userByUid;
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
