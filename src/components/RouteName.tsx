import { useLocation } from "react-router-dom";

const RouteName: React.FC = () => {
  const location = useLocation();

  let routeName = "";
  switch (location.pathname) {
    case "/":
      routeName = "Home";
      break;
    case "/job-creation":
      routeName = "Job Creation";
      break;
    case "/sample-collection":
      routeName = "Sample Collection";
      break;
    case "/assign-qr-code":
      routeName = "Assign QR Code";
      break;
    case "/sample-preparation":
      routeName = "Sample Preparation";
      break;
    case "/lab-head-assignment":
      routeName = "Lab Head Assignment";
      break;
    case "/chemist-action":
      routeName = "Chemist Action";
      break;
    case "/test-result":
      routeName = "Test Result";
      break;
    case "/lab-head-progress":
      routeName = "Lab Head Progress";
      break;
    case "/lab-certificate":
      routeName = "Lab Certificate";
      break;
    case "/create-jrf":
      routeName = "Create JRF";
      break;
    case "/sample-collection-details":
      routeName = "Sample Collection Details";
      break;
    case "/lab-activity":
      routeName = "Laboratory Activity";
      break;
    case "/test-progress":
      routeName = "Test Progress";
      break;
    case "/tm-entry-at-plant":
      routeName = "TM Entry at Plant";
      break;
    case "/verification-of-test-result":
      routeName = "Verification of Test Result";
      break;
      case "/view-jrf":
      routeName = "View JRF";
      break;
    case "/final-report":
      routeName = "Final Report";
      break;
      case "/validate-data":
      routeName = "Validate Data";
      break;
      case "/view-preparation":
      routeName = "View Preparation";
      break;
      case "/referee":
      routeName = "Referee";
      break;
    default:
      routeName = "Unknown";
  }

  return (
    <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
      {routeName}
    </span>
  );
};

export default RouteName;
