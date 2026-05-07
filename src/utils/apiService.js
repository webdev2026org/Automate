import { endpoints } from "./endpoints";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

const buildUrl = (path, params, pathParams) => {
  let resolvedPath = path;

  // ✅ Replace path params like :id
  if (pathParams) {
    Object.keys(pathParams).forEach((k) => {
      resolvedPath = resolvedPath.replace(`:${k}`, pathParams[k]);
    });
  }

  const url = new URL(`${BASE_URL}/api${resolvedPath}`);
  if (params) {
    Object.keys(params).forEach((k) => {
      if (params[k] !== undefined && params[k] !== null) url.searchParams.append(k, params[k]);
    });
  }
  return url.toString();
};

const request = async (method, endpointKey, { params, body, headers, pathParams } = {}) => {
  const path = endpoints[endpointKey];
  if (!path) throw new Error(`Unknown endpoint key: ${endpointKey}`);

  const url = buildUrl(path, params, pathParams);
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