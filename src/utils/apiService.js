import { endpoints } from "./endpoints";

const BASE_URL = "http://localhost:5000";

const buildUrl = (path, params) => {
  const url = new URL(`${BASE_URL}${path}`);
  if (params) {
    Object.keys(params).forEach((k) => {
      if (params[k] !== undefined && params[k] !== null) url.searchParams.append(k, params[k]);
    });
  }
  return url.toString();
};

const request = async (method, endpointKey, { params, body, headers } = {}) => {
  const path = endpoints[endpointKey];
  if (!path) throw new Error(`Unknown endpoint key: ${endpointKey}`);

  const url = buildUrl(path, params);
  const opts = {
    method,
    headers: { "Content-Type": "application/json", ...(headers || {}) },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

export default {
  get: (key, opts) => request("GET", key, opts),
  post: (key, opts) => request("POST", key, opts),
  put: (key, opts) => request("PUT", key, opts),
  del: (key, opts) => request("DELETE", key, opts),
};