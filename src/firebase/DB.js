import { db } from './core';
import { type } from '../utils/helpers';

export default class DB {
  static users = db.collection('users');

  static createUser(uid, user) {
    if (type(user) !== 'object') {
      throw new Error('Error in DB.createUser: invalid type of user argument');
    }
    return DB.users.doc(uid).set(user);
  }
}
