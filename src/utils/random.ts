const randomString = (length: number): string => {
  let outString = '';
  const noNumOptions = 'abcdefghijklmnopqrstuvwxyz';
  const inOptions = 'abcdefghijklmnopqrstuvwxyz0123456789';
  outString += noNumOptions.charAt(Math.floor(Math.random() * noNumOptions.length));
  for (let i = 0; i < length - 1; i += 1) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }

  return outString;
};

export { randomString };
