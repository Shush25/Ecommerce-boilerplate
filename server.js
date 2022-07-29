// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("./db.json");
// const middlewares = jsonServer.defaults({
//   static: "./build",
// });

// const port = process.env.PORT || 5000;
// server.use(middlewares);
// server.use(
//   jsonServer.rewriter({
//     "/*": "/$1",
//   })
// );

// server.use(router);
// server.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });
const { exec } = require("child_process");
exec(
  "json-server -m ./node_modules/json-server-auth --watch db.json --port 5000"
);
