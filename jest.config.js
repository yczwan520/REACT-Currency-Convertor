const config = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|sass|css|svg)$": "identity-obj-proxy",
  },
};

module.exports = config;
