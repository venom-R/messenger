export const VALIDATION_RULES = {
  firstName: [{ required: true, message: 'Please input your first name!' }],
  lastName: [{ required: true, message: 'Please input your last name!' }],
  email: [
    { type: 'email', message: 'Email is not valid!' },
    { required: true, message: 'Please input your email!' },
  ],
  password: [
    { required: true, message: 'Please input your Password!' },
    { min: 6, message: 'Password should contain at least 6 characters' },
  ],
};
