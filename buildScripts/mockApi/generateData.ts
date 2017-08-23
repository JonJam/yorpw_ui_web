import * as jsf from "json-schema-faker";
import groupSchema from "./groupSchema";
import siteSchema from "./siteSchema";

// TODO get working with json server
// TODO Add types
export default function generateData() : any {
  const compiledGroupSchema = jsf(groupSchema);

  const groups = compiledGroupSchema.groups;
  let sites: any[] = [];

  groups.forEach((group: any) => {
    const compiledSiteSchema = jsf(siteSchema);

    sites = [...sites, ...compiledSiteSchema.sites];

    group.sites = compiledSiteSchema.sites.map((site: any) => site.id);
  });

  return {
    groups,
    sites
  };
}