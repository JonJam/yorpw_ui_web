import * as React from "react";
import NavBar from "./navBar/NavBar";
import Progress from "./progress/Progress";

interface IHeaderProps {
  isBusy: boolean;
}

export default function Header(props: IHeaderProps) {
  return (
    <div>
      <NavBar />
      <Progress isBusy={props.isBusy} />
    </div>
  );
}
