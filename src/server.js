const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
server.db = router.db;
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 5000;
server.use(middlewares);
server.use(
  auth.rewriter({
    "/api/*": "/$1",
  })
);
server.use(auth);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});
