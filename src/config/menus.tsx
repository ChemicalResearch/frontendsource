import ActiveNavLink from "../components/ActiveNavLink";

const menus: Record<Menus, JSX.Element> = {
  Home: (
    <ActiveNavLink key="Home" to="/">
      Home
    </ActiveNavLink>
  ),
  "Job creation": (
    <ActiveNavLink key="Job Creation" to="/job-creation">
      Job Creation
    </ActiveNavLink>
  ),
  "Sample collection": (
    <ActiveNavLink key="Sample Collection" to="/sample-collection">
      Sample Collection
    </ActiveNavLink>
  ),
  "Sample prep and qr assignment": (
    <ActiveNavLink key="Sample Prep & QR Assignment" to="/assign-qr-code">
      Sample Prep & QR Assignment
    </ActiveNavLink>
  ),
  "View preparation": (
    <ActiveNavLink key="View Preparation" to="/view-preparation">
      View Preparation
    </ActiveNavLink>
  ),
  "Tm entry at plant": (
    <ActiveNavLink key="TM Entry at Plant" to="/tm-entry-at-plant">
      TM Entry at Plant
    </ActiveNavLink>
  ),
  "Validate data": (
    <ActiveNavLink key="Validate Data" to="/validate-data">
      Validate Data
    </ActiveNavLink>
  ),
  "Create jrf": (
    <ActiveNavLink key="Create JRF" to="/create-jrf">
      Create JRF
    </ActiveNavLink>
  ),
  "Laboratory activity": (
    <ActiveNavLink key="Laboratory Activity" to="/lab-activity">
      Laboratory Activity
    </ActiveNavLink>
  ),
  "Test progress": (
    <ActiveNavLink key="Test Progress" to="/test-progress">
      Test Progress
    </ActiveNavLink>
  ),
  "Verification of test result": (
    <ActiveNavLink
      key="Verification of Test Result"
      to="/verification-of-test-result"
    >
      Verification of Test Result
    </ActiveNavLink>
  ),
  "Final report": (
    <ActiveNavLink key="Final Report" to="/final-report">
      Final Report
    </ActiveNavLink>
  ),
  "View jrf": (
    <ActiveNavLink key="View JRF" to="/view-jrf">
      View JRF
    </ActiveNavLink>
  ),
  Referee: (
    <ActiveNavLink key="Referee" to="/referee">
      Referee
    </ActiveNavLink>
  ),
  "Lab head assignment": (
    <ActiveNavLink key="Lab Head Assignment" to="/lab-head-assignment">
      Lab Head Assignment
    </ActiveNavLink>
  ),
  "Chemist action": (
    <ActiveNavLink key="Chemmist Action" to="/chemist-action">
      Chemmist Action
    </ActiveNavLink>
  ),
};

export default menus;
