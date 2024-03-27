const { incall } = require("./innercall");

// const innerCall = require("./innercall");
exports.catchasync = (str) => {
  (() => {
    incall(str);
  })();
};
