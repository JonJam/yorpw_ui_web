import * as React from "react";
import NavBar from "./navBar/NavBar";
import Progress from "./progress/Progress";

interface IHeaderProps {
  readonly searchTerm: string;
  readonly isBusy: boolean;
  readonly isAuthenticated: boolean;
  readonly currentLocation: string;
  handleSignOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ isBusy, ...rest }: IHeaderProps) {
  return (
    <div className="sticky-top">
      <NavBar {...rest} />
      <Progress isBusy={isBusy} />
    </div>
  );
}
