const server = require('./app');

// write your code here
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});