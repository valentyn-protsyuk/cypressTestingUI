import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage: "stage",
      prod: "prod",
      info: "info"
    }
  },
  defaultCommandTimeout:5_000, //set default timeout to 5 seconds
});
