import { ERROR_CUSTOM_MESSAGES } from '../firebase/errorMessages';

export function type(value) {
  const regex = /^\[object (\S+?)\]$/;
  const matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || 'undefined').toLowerCase();
}

export const getErrorMessage = error => {
  return ERROR_CUSTOM_MESSAGES[error.code] || error.message;
};
