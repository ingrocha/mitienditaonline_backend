const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io");
const db = require("./models");
// import wizeSequelizeAudit from "@wizeapps/sequelize-audit";

app.use(bodyParser.json());
// app.use(express.methodOverride());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

require("./functions/LoggerRequest")(app);

// db.sequelize.sync();
// const opts = {
//   exclude: ["id", "createdAt", "updatedAt"],
// };
db.sequelize.sync({ force: true });
// db.sequelize.sync();
// path.basename(__filename)
// console.log(path.basename(__filename));
// console.log(path.join(__dirname, "/routes"));
const routes = path.join(__dirname, "/routes");
fs.readdirSync(routes).forEach((file) => {
  require(path.join(routes, file))(app);
});

// require("./routes/login.routes.js")(app);
// require("./routes/superusuario.routes")(app);
// require("./routes/superrol.routes")(app);
// require("./routes/auditLog.routes")(app);
// require("./routes/sucursales.routes")(app);
// require("./routes/suscripciones.routes")(app);

// require("./functions/LoggerRequestErrors")(app);

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// http.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}: \x1b[32m%s\x1b[0m`, "online");
// });
const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
  console.log(
    `Server is running
    mode: \x1b[32m%s\x1b[0m
    port: \x1b[32m%s\x1b[0m
    status: \x1b[32m%s\x1b[0m`,
    app.settings.env,
    PORT,
    "online"
  );
});
