import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5180",
    supportFile: false,
    defaultCommandTimeout: 10000, // give slow container responses >4s
    retries: { runMode: 2 }, // auto-retry a flaky test up to 2x
  },
});
