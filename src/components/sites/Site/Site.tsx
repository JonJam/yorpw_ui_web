import * as React from "react";
import ISite from "../../../models/ISite";

import "./Site.css";

interface ISiteProps {
  site: ISite;
}

function Site(props: ISiteProps) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title lead text-truncate">
            {props.site.name}
          </p>
          <p className="card-subtitle text-muted text-truncate">
            {props.site.userName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Site;
