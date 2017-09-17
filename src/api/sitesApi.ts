import ISite from "../models/ISite";
import ApiError from "./ApiError";
import baseUrl from "./baseUrl";

export async function getSites(): Promise<ISite[]> {
  const requestUrl = `${baseUrl}sites`;

  // Throws TypeError for network error. See for details: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new ApiError(response.status, response.statusText);
  }
}

export async function updateSite(site: ISite): Promise<ISite> {
  const requestUrl = `${baseUrl}sites/${site.id}`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    body: JSON.stringify(stripProperties(site)),
    headers,
    method: "PATCH"
  };

  // Throws TypeError for network error. See for details: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl, requestInit);

  if (response.ok) {
    return await response.json();
  } else {
    throw new ApiError(response.status, response.statusText);
  }
}

export async function deleteSite(siteId: string): Promise<void> {
  const requestUrl = `${baseUrl}sites/${siteId}`;

  const requestInit: RequestInit = {
    method: "DELETE"
  };

  // Throws TypeError for network error. See for details: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl, requestInit);

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText);
  }
}

export async function addSite(site: ISite): Promise<ISite> {
  const requestUrl = `${baseUrl}sites/`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    body: JSON.stringify(stripProperties(site)),
    headers,
    method: "POST"
  };

  // Throws TypeError for network error. See for details: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl, requestInit);

  if (response.ok) {
    return await response.json();
  } else {
    throw new ApiError(response.status, response.statusText);
  }
}

// Using this to remove any other properties that happen to be on object so only
// send ISite properties to server.
function stripProperties({ id, name, url, password, userName }: ISite): ISite {
  return {
    id,
    name,
    password,
    url,
    userName
  };
}
