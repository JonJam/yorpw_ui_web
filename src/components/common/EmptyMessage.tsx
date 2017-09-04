import * as React from "react";

interface IEmptyMessageProps {
  emptyMessage: string;
}

function EmptyMessage(props: IEmptyMessageProps) {
  return (
    <div>
      {props.emptyMessage}
    </div>
  );
}

export default EmptyMessage;
