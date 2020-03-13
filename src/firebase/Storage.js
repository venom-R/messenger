import { storage } from './core';

export default class Storage {
  static ref = storage.ref();
  static imagesRef = Storage.ref.child('images');
  static avatarsRef = Storage.imagesRef.child('avatars');
}
