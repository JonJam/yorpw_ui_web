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
          <h4 className="card-title text-truncate">
            {props.site.name}
          </h4>
          <h6 className="card-subtitle text-muted text-truncate">
            {props.site.userName}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Site;
