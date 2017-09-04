import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import SiteList from "./SiteList";

interface IGroupProps {
  parentId: string;
  group: IGroupViewModel;
}

function Group(props: IGroupProps) {
  // WORKING HERE
  const headingId = props.group.id;
  const collapseId = `collapse${props.group.id}`;
  return (
    <div className="card">
      <div className="card-header" role="tab" id={headingId}>
        <h2 className="mb-0">
          <a
            data-toggle="collapse"
            href={`#${collapseId}`}
            aria-expanded="true"
            aria-controls={collapseId}
          >
            {props.group.name}
          </a>
        </h2>
      </div>

      <div
        id={collapseId}
        className="collapse show"
        role="tabpanel"
        aria-labelledby={headingId}
        data-parent={`#${props.parentId}`}
      >
        <div className="card-body">
          <SiteList sites={props.group.sites} />
        </div>
      </div>
    </div>
  );
}

export default Group;
