import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Group from "./Group";

interface IGroupListProps {
  groups: IGroupViewModel[];
}

function GroupList(props: IGroupListProps) {
  const groupItems = props.groups.map(group => {
    return <Group key={group.id} group={group} />;
  });

  // TODO Maybe move this logic to a common function
  const isEmpty = groupItems.length === 0;

  return (
    <div>
      {groupItems}
      <EmptyMessage
        emptyMessage={strings.groupList.emptyMessage}
        isEmpty={isEmpty}
      />
    </div>
  );
}

export default GroupList;
