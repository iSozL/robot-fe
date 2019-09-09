const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://usv2.ncuos.com",
      changeOrigin: true,
    }),
    proxy("/url", {
      target: "http://39.108.234.123",
      changeOrigin: true
    })
  );
}