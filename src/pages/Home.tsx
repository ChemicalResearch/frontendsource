import { Navigate } from "react-router-dom";
import { menuRolesMap } from "../constants/roleBasedMenuItemsWithComponent";
import { withRole } from "../hooks";

function Home() {
  return (
    <iframe
      className="fixed top-0 left-0 right-0 bottom-0 h-full mt-[90px] ml-[255px] w-iframe"
      src="https://lookerstudio.google.com/embed/reporting/df3d3d07-699f-4562-830b-b177bf636cc8/page/bk23D"
      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    />
  );
}

export default withRole(Home, {
  roles: menuRolesMap["Home"],
  OnNoAccess: () => <Navigate to="/" replace />,
});
