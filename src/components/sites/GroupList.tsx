import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Group from "./Group";

interface IGroupListProps {
  groups: IGroupViewModel[];
}

function GroupList(props: IGroupListProps) {
  let element: JSX.Element = (
    <EmptyMessage emptyMessage={strings.groupList.emptyMessage} />
  );

  // TODO Maybe move this logic to a common function
  if (props.groups.length > 0) {
    const groupItems = props.groups.map(group => {
      return <Group key={group.id} group={group} />;
    });

    element = (
      <div data-children=".item">
        {groupItems}
      </div>
    );
  }

  return element;
}

export default GroupList;
