import baseUrl from "./baseUrl";
import IGroup from "../model/IGroup";
import ApiError from "./ApiError";
import "whatwg-fetch";

// TODO test this
export async function getGroups(): Promise<IGroup[]> {
  const requestUrl = `${baseUrl}groups`;

  // TODO Check what happens with a 404 error. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch(requestUrl);

  if (response.ok) {
    return await response.json();
  } else {
    // TODO Check this works as expected see https://github.com/Microsoft/TypeScript/issues/12666
    throw new ApiError(response.status, response.statusText);
  }
}
