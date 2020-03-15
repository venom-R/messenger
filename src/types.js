import { shape, string } from 'prop-types';
import { SOCIAL_MEDIA_LINKS } from './constants/socialMediaLinks';

export const errorType = shape({
  code: string,
  message: string,
});

export const socialMediaType = shape(
  Object.keys(SOCIAL_MEDIA_LINKS).reduce((socials, item) => {
    return {
      ...socials,
      [item]: string,
    };
  }, {}),
);

export const profileUserDataType = shape({
  city: string,
  country: string,
  description: string,
  firstName: string,
  lastName: string,
  photo: string,
  phoneNumber: string,
  website: string,
  socialMedia: socialMediaType,
});
