export const fetch = jest.fn(() => {
  Promise((resolve, reject) => {
    console.log('funcionaa');
    console.log(resolve);
    console.log(reject);
  });
});

console.log(fetch);
