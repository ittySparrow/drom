export default (string) =>
  string + Date.now() + String(Math.random()).substr(2);
