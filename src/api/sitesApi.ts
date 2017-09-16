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
    method: "PATCH",
    headers,
    body: JSON.stringify(site)
  };

  // Throws TypeError for network error. See for details: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl, requestInit);

  if (response.ok) {
    return await response.json();
  } else {
    throw new ApiError(response.status, response.statusText);
  }
}
