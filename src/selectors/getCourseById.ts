import ISite from "../models/ISite";

export default function getCourseById(
  sites: ReadonlyArray<ISite>,
  siteId: string
) {
  return sites.find(s => s.id === siteId);
}
