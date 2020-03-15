export const VALIDATION_RULES = {
  firstName: [
    { required: true, message: 'Please input your first name!' },
    { max: 25, message: 'First name should contain up to 25 characters!' },
  ],
  lastName: [
    { required: true, message: 'Please input your last name!' },
    { max: 25, message: 'Last name should contain up to 25 characters!' },
  ],
  email: [
    { type: 'email', message: 'Email is not valid!' },
    { required: true, message: 'Please input your email!' },
  ],
  password: [
    { required: true, message: 'Please input your Password!' },
    { min: 6, message: 'Password should contain at least 6 characters' },
  ],
  country: [{ max: 50, message: 'Country should contain up to 50 characters!' }],
  city: [{ max: 50, message: 'City should contain up to 50 characters!' }],
  description: [{ max: 240, message: 'Description should contain up to 120 characters!' }],
};
