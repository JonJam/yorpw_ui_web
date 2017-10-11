import * as React from "react";
import IGroupWithSites from "../../../models/IGroupWithSites";
import strings from "../../../strings";
import SiteList from "../SiteList";

import "./Group.css";

interface IGroupProps {
  readonly group: IGroupWithSites;
  handleSiteClick: (siteId: string) => void;
  handleGroupEditClick: (groupId: string) => void;
  readonly isBusy: boolean;
}

function Group(props: IGroupProps) {
  const headingId = props.group.id;
  const collapseId = `collapse${props.group.id}`;

  const handleClick = () => {
    props.handleGroupEditClick(props.group.id);
  };

  return (
    <div className="item my-2">
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-10 col-sm-11 text-truncate">
            <span className="badge badge-secondary">
              {props.group.sites.length}
              <span className="sr-only">
                {strings.group.sitesInGroup}
              </span>
            </span>
            &nbsp;
            <a
              href={`#${collapseId}`}
              data-toggle="collapse"
              aria-expanded="true"
              aria-controls={collapseId}
            >
              {props.group.name}
            </a>
          </div>
          <div className="col-2 col-sm-1">
            <button
              type="button"
              className="btn btn-primary btn-sm float-right"
              onClick={handleClick}
            >
              <span
                className="fa fa-pencil"
                aria-hidden="true"
                aria-label={strings.group.editButton}
              />
            </button>
          </div>
        </div>
      </div>

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
