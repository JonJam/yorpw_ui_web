import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import SiteList from "./SiteList";
import strings from "../../strings";

interface IGroupProps {
  group: IGroupViewModel;
}

function Group(props: IGroupProps) {
  const headingId = props.group.id;
  const collapseId = `collapse${props.group.id}`;

  return (
    <div className="item my-2">
      <button
        type="button"
        className="btn btn-light btn-lg btn-block text-left"
        data-target={`#${collapseId}`}
        data-toggle="collapse"
        aria-expanded="true"
        aria-controls={collapseId}
      >
        {/* Working here */}
        <div className="text-truncate">{props.group.name}</div>
        &nbsp;
        <span className="badge badge-secondary ">
          {props.group.sites.length}
          <span className="sr-only">
            {strings.group.sitesInGroup}
          </span>
        </span>
      </button>

      <div
        id={collapseId}
        className="collapse show"
        role="tabpanel"
        aria-labelledby={headingId}
      >
        <div className="card-body">
          <SiteList sites={props.group.sites} />
        </div>
      </div>
    </div>
  );
}

export default Group;
