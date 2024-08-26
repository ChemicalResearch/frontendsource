import ActiveNavLink from "./ActiveNavLink";
import imgLogo from "../assets/images/logo.png";
import { useAuth } from "../context/auth";
import { roleBasedMenuItemsWithComponent } from "../constants/roleBasedMenuItemsWithComponent";

const SideMenu = () => {
  const { user } = useAuth();
  return (
    <div
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300"
    >
      <div className="px-6">
        <a
          className="flex items-center gap-4 text-xl font-semibold"
          href="#"
          aria-label="TCRC"
        >
          <img src={imgLogo} alt="logo" height={36} width={36} />
          <b className="text-[#ef2328]">TCRC</b>
        </a>
      </div>
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap space-y-1">
        {roleBasedMenuItemsWithComponent?.map((item) => {
          if (item.roles.includes(user?.role as string))
            return (
              <ActiveNavLink key={item.to} to={item.to}>
                {item.name}
              </ActiveNavLink>
            );
          return null;
        })}
        {/* <ActiveNavLink to="/">Home</ActiveNavLink>
        <ActiveNavLink to="/job-creation">Job Creation</ActiveNavLink>
        <ActiveNavLink to="/sample-collection">Sample Collection</ActiveNavLink>
        <ActiveNavLink to="/assign-qr-code">
          Sample Prep & QR Assignment
        </ActiveNavLink>
        <ActiveNavLink to="/view-preparation">View Preparation</ActiveNavLink>
        <ActiveNavLink to="/tm-entry-at-plant">TM Entry at Plant</ActiveNavLink>
        <ActiveNavLink to="/validate-data">Validate Data</ActiveNavLink>
        <ActiveNavLink to="/create-jrf">Create JRF</ActiveNavLink>
        <ActiveNavLink to="/lab-activity">Laboratory Activity</ActiveNavLink>
        <ActiveNavLink to="/test-progress">Test Progress</ActiveNavLink>
        <ActiveNavLink to="/verification-of-test-result">
          Verification of Test Result
        </ActiveNavLink>
        <ActiveNavLink to="/final-report">Final Report</ActiveNavLink>
        <ActiveNavLink to="/view-jrf">View JRF</ActiveNavLink>
        <ActiveNavLink to="/referee">Referee</ActiveNavLink>
        <ActiveNavLink to="/lab-head-assignment">
          Lab Head Assignment
        </ActiveNavLink>
        <ActiveNavLink to="/chemist-action">Chemmist Action</ActiveNavLink> */}
      </nav>
    </div>
  );
};

export default SideMenu;
