const { defineConfig } = require("cypress");
const cucumber = require('cypress10-cucumber-preprocessor').default

module.exports = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	defaultCommandTimeout: 60000,
	videoCompression: false,
	pageLoadTimeout: 180000,
	video: false,
	responsetimeout: 180000,
	e2e: {
		async setupNodeEvents(on, config) {
			require('@cypress/code-coverage/task')(on, config)
			on('file:preprocessor', cucumber())
			return config
		},
		baseUrl: 'http://localhost:3000',
		fixturesFolder: false,
		specPattern: "**/*.feature",
	  },
});
