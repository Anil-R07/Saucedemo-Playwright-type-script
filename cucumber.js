module.exports = {
  default: {
    require: [
      "step-definitions/*.ts",
      "utils/hooks.ts"
    ],
    requireModule: ["ts-node/register/transpile-only"],
    paths: ["tests/features/*.feature"],
    format: ["progress"],
    timeout: 60000
  }
};