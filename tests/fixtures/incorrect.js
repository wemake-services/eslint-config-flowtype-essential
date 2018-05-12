// @flow

type Client <T> = {
  name: String;
  surname: string;
  age: number|string;
  isRegular: bool;
  reference: T;
}

// eslint-disable-next-line no-unused-vars
function greetClient (client:Client< string >):string {
  return `Hi, ${client.name}-{$client.reference}`
}
