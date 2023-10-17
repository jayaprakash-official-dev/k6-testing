import http from "k6/http";
import { SharedArray } from "k6/data";
// not using SharedArray here will mean that the code in the function call (that is what loads and
// parses the json) will be executed per each VU which also means that there will be a complete copy
// per each VU
const data = new SharedArray("some data name", function () {
  return JSON.parse(open("./account.json")).users;
});

export default function () {
  const user = data[0];
  const payload = JSON.stringify({
    name: user.username,
    surname: user.surname,
  });
  console.log("payload", payload);
  //   const headers = { "Content-Type": "application/json" };
  const res = http.post("https://httpbin.test.k6.io/post", payload);
  console.log("res", res.body);
}
