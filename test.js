import http from "k6/http";

export default function () {
  const response = http.get("https://demo.bigiron.com/api/app/appversion/v2");
}
