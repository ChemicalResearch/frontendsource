import { useAuth } from "../context/auth";

type WithRoleProps = {
  /**
   * Show a message when redirected to the signin page.
   */
  OnNoAccess?: () => JSX.Element;
  roles: Array<string>;
};

export const withRole = <P extends object>(
  Component: React.ComponentType<P>,
  options: WithRoleProps
): React.FC<P> => {
  const displayName = `withRole(${Component.displayName || Component.name})`;
  const { roles, OnNoAccess = (): JSX.Element => <></> } = options;
  const C: React.FC<P> = (props) => {
    const { user } = useAuth();

    if (!roles.includes(user?.role as string)) return OnNoAccess();
    return <Component {...props} />;
  };

  C.displayName = displayName;

  return C;
};
