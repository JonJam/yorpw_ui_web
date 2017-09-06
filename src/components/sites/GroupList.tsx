import * as React from "react";
import IGroupViewModel from "../../models/IGroupViewModel";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Group from "./Group";

interface IGroupListProps {
  groups: IGroupViewModel[];
  isBusy: boolean;
}

function GroupList(props: IGroupListProps) {
  let element: JSX.Element | null = null;

  if (props.groups.length > 0) {
    const groupItems = props.groups.map(group => {
      return <Group key={group.id} group={group} />;
    });

    element = (
      <div data-children=".item">
        {groupItems}
      </div>
    );
  } else if (!props.isBusy) {
    element = (
      <div className="row">
        <div className="col-12 mt-3">
          <EmptyMessage
            emptyMessageTitle={strings.groupList.emptyMessageTitle}
            emptyMessageDescription={strings.groupList.emptyMessageDescription}
          />
        </div>
      </div>
    );
  }

  return element;
}

export default GroupList;