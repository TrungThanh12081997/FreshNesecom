import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API } from "../constant/API";
// const BASE_API_URL = "https://gw-prd.treehouse.finance";

const request = (url, options) => {
  if (options?.params) {
    const queryParams = new URLSearchParams(options.params);
    url += `?${queryParams.toString()}`;
  }
  return fetch(url).then(async (res) => {
    const totalPages = res.headers.get("X-WP-TotalPages");
    const meta = {};
    if (totalPages) {
      meta["totalPages"] = totalPages;
    }
    const jsonData = await res.json();
    return { data: jsonData, meta };
  });
};

export default request;

export const getBackendRequest = (url, options) => {
  if (options?.params) {
    const queryParams = new URLSearchParams(options.params);
    url += `?${queryParams.toString()}`;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic 99fabba4ec8299f4cc648659932c0b1fac121062",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }).then(async (res) => {
    const jsonData = await res.json();
    return { data: jsonData };
  });
};

export const postRequest = async (url, options) => {
  const {
    params,
    method = "POST",
    contentType = "application/json",
    authorization = "Basic 99fabba4ec8299f4cc648659932c0b1fac121062",
  } = options;

  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": contentType,
      Authorization: authorization,
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(params), // body data type must match "Content-Type" header
  });

  return response.json();
};

export const customBaseQuery = (apiPath) =>
  fetchBaseQuery({
    baseUrl: API + apiPath,
    prepareHeaders: (headers) => {
      //   const bearerToken = localStorage.getItem(ACCESS_TOKEN);
      // headers.set("content-type", "text/json");

      // If we have a token set in state, let's assume that we should be passing it.
      // if (bearerToken) {
      //     headers.set('authorization', `Bearer ${bearerToken}`)
      // }
      headers.set(
        "authorization",
        `Basic 99fabba4ec8299f4cc648659932c0b1fac121062`
      );
      return headers;
    },
  });
