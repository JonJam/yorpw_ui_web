import * as React from "react";
import ISite from "../../models/ISite";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Site from "./Site/Site";

interface ISiteListProps {
  sites: ISite[];
}

function SiteList(props: ISiteListProps) {
  const sites = props.sites.map(site => <Site key={site.id} site={site} />);

  // TODO Maybe move this logic to a common function
  const isEmpty = sites.length === 0;

  return (
    <div className="row">
      {sites}
      <EmptyMessage
        emptyMessage={strings.siteList.emptyMessage}
        isEmpty={isEmpty}
      />
    </div>
  );
}

export default SiteList;
