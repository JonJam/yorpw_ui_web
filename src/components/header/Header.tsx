import * as React from "react";
import NavBar from "./navBar/NavBar";
import Progress from "./progress/Progress";

interface IHeaderProps {
  isBusy: boolean;
  isAuthenticated: boolean;
  handleSignOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Header({ isBusy, ...rest }: IHeaderProps) {
  return (
    <div>
      <NavBar {...rest} />
      <Progress isBusy={isBusy} />
    </div>
  );
}
