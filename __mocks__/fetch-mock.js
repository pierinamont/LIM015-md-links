const fetch = jest.fn(() => new Promise((resolve, reject) => {
  console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  resolve();
  reject();
}));

export default fetch;
