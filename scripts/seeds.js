const execSync = require("child_process").execSync;
const dotenv = require("dotenv");
dotenv.config();
let script =
  "npx sequelize db:seed:all --config config/seed.config.json --env " +
  process.env.NODE_ENV;
try {
  execSync(script, { stdio: "inherit" });
  process.exit(0);
} catch (err) {
  throw new Error("Could not install ng build");
}
// console.log(script);
