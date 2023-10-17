import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: "15s", target: 10 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: "10s", target: 10 }, // stay at 100 users for 30 minutes
    { duration: "5s", target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get("https://test-api.k6.io");
  sleep(1);
};
