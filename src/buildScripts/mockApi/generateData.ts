import { green, red } from "chalk";
import * as fs from "fs";
import * as jsf from "json-schema-faker";
import groupSchema from "./groupSchema";
import IGroup from "../../models/IGroup";
import ISite from "../../models/ISite";
import siteSchema from "./siteSchema";

const compiledGroupSchema = jsf(groupSchema);

const generatedGroups: ReadonlyArray<IGroup> = compiledGroupSchema.groups;

let sites: ISite[] = [];
let groups: IGroup[] = [];

generatedGroups.forEach((group: IGroup) => {
  const compiledSiteSchema = jsf(siteSchema);

  sites = [...sites, ...compiledSiteSchema.sites];

  groups.push({
    ...group,
    siteIds: compiledSiteSchema.sites.map((site: ISite) => site.id)
  });
});

const json = JSON.stringify({
  groups,
  sites
});

fs.writeFile("./src/buildScripts/mockApi/db.json", json, err => {
  if (err) {
    console.log(red(err.message));
  } else {
    console.log(green("Mock API data generated."));
  }
});
