const expressWinston = require("express-winston");
const winston = require("winston");
const { env } = require("../config/config");
module.exports = (app) => {
  let format;
  if (env === "development") {
    format = winston.format.combine(
      winston.format.timestamp(),
      winston.format.prettyPrint()
    );
  } else {
    format = winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    );
  }
  app.use(
    expressWinston.errorLogger({
      transports: [
        // new winston.transports.Console(),
        new winston.transports.File({
          filename: "log/requestErrors.log",
        }),
      ],
      format: format,
      meta: true,
      requestWhitelist: ["headers", "query", "body"],
      dynamicMeta: (req, res) => {
        const httpRequest = {};
        const meta = {};
        if (req) {
          meta.httpRequest = httpRequest;
          httpRequest.requestMethod = req.method;
          httpRequest.requestUrl = `${req.protocol}://${req.get("host")}${
            req.originalUrl
          }`;
          httpRequest.protocol = `HTTP/${req.httpVersion}`;
          // httpRequest.remoteIp = req.ip // this includes both ipv6 and ipv4 addresses separated by ':'
          httpRequest.remoteIp =
            req.ip.indexOf(":") >= 0
              ? req.ip.substring(req.ip.lastIndexOf(":") + 1)
              : req.ip; // just ipv4
          httpRequest.requestSize = req.socket.bytesRead;
          httpRequest.userAgent = req.get("User-Agent");
          httpRequest.referrer = req.get("Referrer");
        }

        if (res) {
          meta.httpRequest = httpRequest;
          httpRequest.status = res.statusCode;
          httpRequest.latency = {
            seconds: Math.floor(res.responseTime / 1000),
            nanos: (res.responseTime % 1000) * 1000000,
          };
          if (res.body) {
            if (typeof res.body === "object") {
              httpRequest.responseSize = JSON.stringify(res.body).length;
            } else if (typeof res.body === "string") {
              httpRequest.responseSize = res.body.length;
            }
          }
        }
        return meta;
      },
    })
  );
};
