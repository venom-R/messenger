import { ERROR_CUSTOM_MESSAGES } from '../../firebase/errorMessages';

export const getErrorMessage = error => {
  return ERROR_CUSTOM_MESSAGES[error.code].message || error.message;
};

export const createFieldsErrors = (values, error) => {
  if (!(error.code in ERROR_CUSTOM_MESSAGES)) return {};

  const currentError = ERROR_CUSTOM_MESSAGES[error.code];
  return Object.keys(values).reduce((fields, fieldName) => {
    if (!currentError.fields.includes(fieldName)) {
      return fields;
    }
    return {
      ...fields,
      [fieldName]: {
        value: values[fieldName],
        errors: [new Error(getErrorMessage(error))],
      },
    };
  }, {});
};
