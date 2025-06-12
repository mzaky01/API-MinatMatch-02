const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const { loadModel } = require("./utils/predict");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  loadModel()
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init()
