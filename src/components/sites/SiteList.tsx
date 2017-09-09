import * as React from "react";
import ISite from "../../models/ISite";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Site from "./site/Site";

interface ISiteListProps {
  sites: ISite[];
  isBusy: boolean;
  handleSiteClick: (siteId: string) => void;
}

export default function SiteList(props: ISiteListProps) {
  let element: JSX.Element | null = null;

  if (props.sites.length > 0) {
    const sites = props.sites.map(site =>
      <Site key={site.id} site={site} handleSiteClick={props.handleSiteClick} />
    );

    element = (
      <div className="row">
        {sites}
      </div>
    );
  } else if (!props.isBusy) {
    element = (
      <EmptyMessage
        emptyMessageTitle={strings.siteList.emptyMessageTitle}
        emptyMessageDescription={strings.siteList.emptyMessageDescription}
      />
    );
  }

  return element;
}
