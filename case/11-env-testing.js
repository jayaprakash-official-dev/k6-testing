import http from "k6/http";
import { sleep } from "k6";

export default function () {
  const res = http.get(`http://${__ENV.MY_HOSTNAME}/`);
  sleep(1);
}

// k6 run -e MY_HOSTNAME=test.k6.io script.js
