import http from "k6/http";
import { sleep, check } from "k6";

export default function () {
  const response = http.get("https://test.k6.io");
  console.log("response", response.body);
}
