import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import classNames from "classnames";

const ActiveNavLink: FC<NavLinkProps> = (props) => (
  <NavLink
    className={({ isActive }) =>
      classNames(
        "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100",
        { "bg-gray-200": isActive }
      )
    }
    {...props}
  />
);

export default ActiveNavLink;