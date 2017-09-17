import * as React from "react";
import ISite from "../../../models/ISite";

import "./Site.css";

interface ISiteProps {
  readonly site: ISite;
  handleSiteClick: (siteId: string) => void;
}

function Site(props: ISiteProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    props.handleSiteClick(props.site.id);
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 site">
      <a href="#" role="button" onClick={handleClick}>
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
      </a>
    </div>
  );
}

export default Site;
