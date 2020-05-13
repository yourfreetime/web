export const URL = 'http://localhost:4000';

export const IMAGE_DEFAULT =
  'https://www.driver-project.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';

export const colors = {
  main: '#009688',
  dark: '#00786c',
  greyDarken3: '#37474f',
  greyDarken2: '#616161',
  grey: '#9e9e9e',
  background: '#cfd8dc'
};

export const readCurrentUser = () => {
  return JSON.parse(localStorage.getItem('yourfreetime@user'));
};
