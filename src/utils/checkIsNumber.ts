export const checkIsNumber = (value: any) => {
  if (!value || typeof value !== 'string') {
    return false;
  }
  const parsedNumber = parseFloat(value);
  return !isNaN(parsedNumber);
};
