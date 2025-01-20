module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadlessNoSandbox"],
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-sonarqube-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false,
    },
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    sonarqubeReporter: {
      basePath: require("path").join(__dirname, "./src/app"),
      outputFolder: require("path").join(__dirname, "./coverage/reports"),
      filePattern: "**/*spec.ts",
      encoding: "utf-8",
      legacyMode: false,
      reportName: () => {
        return "sonarqube_report.xml";
      },
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/reports"),
      subdir: ".",
      reporters: [
        { type: "html", subdir: "html-report" },
        { type: "lcov", subdir: "lcov-report" },
        { type: "text-summary" },
      ],
    },
    reporters: ["progress", "kjhtml", "sonarqube"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,
  });
};
