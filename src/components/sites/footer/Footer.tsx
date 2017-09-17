import * as React from "react";
import { Link } from "react-router-dom";
import { sitePath } from "../../../routes/paths";
import strings from "../../../strings";

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 col-sm-2 col-lg-1 ml-auto text-center">
            <Link to={sitePath} className="btn btn-primary" role="button">
              <span
                className="fa fa-plus"
                aria-hidden="true"
                aria-label={strings.footer.addSiteButton}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
