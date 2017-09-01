import * as React from "react";
import areActionsInProgress from "./areActionsInProgress";

import "./Progress.css";

interface ILoadingProps {
  pendingActions: number;
}

function Progress(props: ILoadingProps) {
  const displayProgress = areActionsInProgress(props.pendingActions);

  const style: React.CSSProperties = {
    display: displayProgress ? "block" : "none"
  };

  return (
    <div className="progress" style={style}>
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
      />
    </div>
  );
}

export default Progress;
