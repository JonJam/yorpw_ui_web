import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import strings from "../../strings";
import SiteList from "./SiteList";

interface IGroupProps {
  readonly group: IGroupViewModel;
  handleSiteClick: (siteId: string) => void;
  readonly isBusy: boolean;
}

function Group(props: IGroupProps) {
  const headingId = props.group.id;
  const collapseId = `collapse${props.group.id}`;

  return (
    <div className="item my-2">
      <button
        type="button"
        className="btn btn-light btn-lg btn-block text-left text-truncate"
        data-target={`#${collapseId}`}
        data-toggle="collapse"
        aria-expanded="true"
        aria-controls={collapseId}
      >
        <span className="badge badge-secondary">
          {props.group.sites.length}
          <span className="sr-only">
            {strings.group.sitesInGroup}
          </span>
        </span>
        &nbsp;
        {props.group.name}
      </button>

      <div
        id={collapseId}
        className="collapse show"
        role="tabpanel"
        aria-labelledby={headingId}
      >
        <div className="card-body">
          <SiteList
            sites={props.group.sites}
            handleSiteClick={props.handleSiteClick}
            isBusy={props.isBusy}
          />
        </div>
      </div>
    </div>
  );
}

export default Group;
