import IGroup from "../model/IGroup";
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
