import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";

interface IGroupsListProps {
  groups: IGroupViewModel[];
}

function GroupsList(props: IGroupsListProps) {
  return (
    <div>
      {props.groups.length}
    </div>
  );
}

export default GroupsList;
