import * as React from "react";
import { Link } from "react-router-dom";
import { sitePath, groupPath } from "../../../routes/paths";
import strings from "../../../strings";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 col-sm-2 col-lg-1 ml-auto text-center">
            <div className="btn-group dropup">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  className="fa fa-plus"
                  aria-hidden="true"
                  aria-label={strings.footer.add}
                />
              </button>
              <div className="dropdown-menu">
                <Link to={groupPath} className="dropdown-item">
                  {strings.footer.addGroup}
                </Link>
                <Link to={sitePath} className="dropdown-item">
                  {strings.footer.addSite}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
