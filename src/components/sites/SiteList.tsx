import * as React from "react";
import ISite from "../../models/ISite";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Site from "./Site/Site";

interface ISiteListProps {
  sites: ISite[];
}

function SiteList(props: ISiteListProps) {
  let element: JSX.Element = (
    <EmptyMessage
      emptyMessageTitle={strings.siteList.emptyMessageTitle}
      emptyMessageDescription={strings.siteList.emptyMessageDescription}
    />
  );

  if (props.sites.length > 0) {
    const sites = props.sites.map(site => <Site key={site.id} site={site} />);

    element = (
      <div className="row">
        {sites}
      </div>
    );
  }

  return element;
}

export default SiteList;
