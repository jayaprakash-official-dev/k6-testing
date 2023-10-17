// Check for HTTP response code
// import http from "k6/http";
// import { check } from "k6";

// export default function () {
//   const res = http.get("http://test.k6.io/");
//   check(res, {
//     "is status 200": (r) => r.status === 400,
//   });
// }

// Check for text in response body
// import { check } from "k6";
// import http from "k6/http";

// export default function () {
//   const res = http.get("http://test.k6.io/");
//   check(res, {
//     "verify homepage text": (r) =>
//       r.body.includes(
//         "Collection of simple web-pages suitable for load testing"
//       ),
//   });
// }

// Check for response body size
import { check } from "k6";
import http from "k6/http";

export default function () {
  const res = http.get("http://test.k6.io/");
  check(res, {
    "body size is 11,105 bytes": (r) => r.body.length == 11105,
  });
}

// Add multiple checks
// import { check } from 'k6';
// import http from 'k6/http';

// export default function () {
//   const res = http.get('http://test.k6.io/');
//   check(res, {
//     'is status 200': (r) => r.status === 200,
//     'body size is 11,105 bytes': (r) => r.body.length == 11105,
//   });
// }
