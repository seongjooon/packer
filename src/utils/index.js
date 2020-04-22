export const getByteSize = (value) => {
  if (value === '') {
    return;
  }
  const strValue = value;
  let byte = 0;
  for (let i = 0; i < strValue.length; i++) {
    if (escape(strValue.charAt(i)).length > 4) {
      byte += 2;
    } else {
      byte++;
    }
  }
  return byte;
};
