module.exports = env => ({
  Region: "eu-west-3",
  ConfigOptions: {
    FunctionName: `cryptomon-sell-lambda-${env}`,
    Description: "",
    Handler: "index.handler",
    RoleName: `cryptomon-sell-lambda-${env}`,
    MemorySize: 128,
    Timeout: 3,
    Runtime: "nodejs8.10",
    Environment: {
      Variables: {
        NODE_ENV: env
      }
    }
  }
})