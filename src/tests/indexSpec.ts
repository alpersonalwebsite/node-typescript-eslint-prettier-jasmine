import sayHi from '../index';

it('expect sayHi("Peter") to be equals to "Hello, Peter', () => {
  expect(sayHi('Peter')).toEqual('Hello, Peter');
});
