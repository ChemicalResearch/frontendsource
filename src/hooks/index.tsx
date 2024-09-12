import { useAuth } from "../context/auth";

type WithRoleProps = {
  OnNoAccess?: () => JSX.Element;
  menu: Menus;
};

export const withRole = <P extends object>(
  Component: React.ComponentType<P>,
  options: WithRoleProps
): React.FC<P> => {
  const displayName = `withRole(${Component.displayName || Component.name})`;
  const { menu, OnNoAccess = (): JSX.Element => <></> } = options;
  const C: React.FC<P> = (props) => {
    const { user } = useAuth();
    const menusOfUser = (user?.menu || "").split(",") as Array<Menus>;
    if (!menusOfUser?.includes(menu)) return OnNoAccess();
    return <Component {...props} />;
  };

  C.displayName = displayName;

  return C;
};
