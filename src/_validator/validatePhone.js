export const validatePhone = (value) => {
  var num = /\+[7][ ]\(([0-9]{3})\)[ ]([0-9]{3})[-]([0-9]{2})[-]([0-9]{2})/;
  if (value.match(num)) return true;
  return false;
};
