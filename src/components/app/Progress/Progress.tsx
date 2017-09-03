import * as React from "react";
import areActionsInProgress from "./areActionsInProgress";

import "./Progress.css";

interface ILoadingProps {
  pendingActions: number;
}

function Progress(props: ILoadingProps) {
  const displayProgress = areActionsInProgress(props.pendingActions);

  let progress: JSX.Element | null = null;

  if (displayProgress) {
    progress = (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
        />
      </div>
    );
  }

  return progress;
}

export default Progress;
