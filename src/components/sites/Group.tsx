import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import SiteList from "./SiteList";

interface IGroupProps {
  group: IGroupViewModel;
}

function Group(props: IGroupProps) {
  return (
    <div>
      <div className="row">
        <h2>
          {props.group.name}
        </h2>
      </div>
      <SiteList sites={props.group.sites} />
    </div>
  );
}

export default Group;
