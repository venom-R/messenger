import { SOCIAL_MEDIA_LINKS } from '../../constants/socialMediaLinks';

export const filterUndefinedFields = object => {
  return Object.entries(object).reduce((accumulator, [key, value]) => {
    if (value === undefined || value === null) {
      return accumulator;
    }
    return {
      ...accumulator,
      [key]: value,
    };
  }, {});
};

export const combineSocialMedia = values => {
  const allSocials = Object.keys(SOCIAL_MEDIA_LINKS);
  return Object.entries(values).reduce((socials, [key, value]) => {
    if (!allSocials.includes(key)) {
      return {
        ...socials,
        [key]: value,
      };
    }
    return {
      ...socials,
      socialMedia: {
        ...socials.socialMedia,
        [key]: value,
      },
    };
  }, {});
};
