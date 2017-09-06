import * as React from "react";

interface IEmptyMessageProps {
  emptyMessageTitle: string;
  emptyMessageDescription: string;
}

function EmptyMessage(props: IEmptyMessageProps) {
  return (
    <div className="alert alert-light" role="alert">
      <h2 className="alert-heading">
        {props.emptyMessageTitle}
      </h2>
      <p>
        {props.emptyMessageDescription}
      </p>
    </div>
  );
}

export default EmptyMessage;
