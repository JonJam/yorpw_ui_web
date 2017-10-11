import * as React from "react";
import IGroupWithSites from "../../models/IGroupWithSites";
import strings from "../../strings";
import EmptyMessage from "../common/EmptyMessage";
import Group from "./group/Group";

interface IGroupListProps {
  readonly groups: ReadonlyArray<IGroupWithSites>;
  readonly isBusy: boolean;
  handleGroupEditClick: (groupId: string) => void;
  handleSiteClick: (siteId: string) => void;
}

function GroupList(props: IGroupListProps) {
  let element: JSX.Element | null = null;

  if (props.groups.length > 0) {
    const groupItems = props.groups.map(group => {
      return (
        <Group
          key={group.id}
          group={group}
          handleGroupEditClick={props.handleGroupEditClick}
          handleSiteClick={props.handleSiteClick}
          isBusy={props.isBusy}
        />
      );
    });

    element = (
      <div data-children=".item">
        {groupItems}
      </div>
    );
  } else if (!props.isBusy) {
    element = (
      <EmptyMessage
        emptyMessageTitle={strings.groupList.emptyMessageTitle}
        emptyMessageDescription={strings.groupList.emptyMessageDescription}
      />
    );
  }

  return (
    <div className="row">
      <div className="col-12 mt-3">
        {element}
      </div>
    </div>
  );
}

export default GroupList;
