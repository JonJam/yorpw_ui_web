import * as React from "react";

interface IEmptyMessageProps {
  isEmpty: boolean;
  emptyMessage: string;
}

function EmptyMessage(props: IEmptyMessageProps) {
  let emptyMessage: JSX.Element | null = null;

  if (props.isEmpty) {
    emptyMessage = (
      <div>
        {props.emptyMessage}
      </div>
    );
  }

  return emptyMessage;
}

export default EmptyMessage;
