export const ERROR_CUSTOM_MESSAGES = {
  'auth/email-already-exists': {
    message: 'User with this email already exists',
    fields: ['email'],
  },
  'auth/email-already-in-use': {
    message: 'User with this email already exists',
    fields: ['email'],
  },
  'auth/wrong-password': {
    message: 'Incorrect email or password',
    fields: ['email', 'password'],
  },
  'auth/user-not-found': {
    message: 'Incorrect email or password',
    fields: ['email', 'password'],
  },
  'auth/account-exists-with-different-credential': {
    message: 'An account with an E-Mail address to this social account already exists',
    fields: [],
  },
};
