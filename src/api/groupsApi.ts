import IGroup from "../models/IGroup";
import ApiError from "./ApiError";
import baseUrl from "./baseUrl";

export async function getGroups(): Promise<IGroup[]> {
  const requestUrl = `${baseUrl}groups`;

  // Throws TypeError for network error. See for details: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new ApiError(response.status, response.statusText);
  }
}

export async function addGroup(group: IGroup): Promise<IGroup> {
  const requestUrl = `${baseUrl}groups/`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    body: JSON.stringify(stripProperties(group)),
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

export async function updateGroup(group: IGroup): Promise<IGroup> {
  const requestUrl = `${baseUrl}groups/${group.id}`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestInit: RequestInit = {
    body: JSON.stringify(stripProperties(group)),
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

// Using this to remove any other properties that happen to be on object so only
// send IGroup properties to server.
function stripProperties({ id, name, siteIds }: IGroup): IGroup {
  return {
    id,
    name,
    siteIds
  };
}
