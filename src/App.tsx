import { Routes, Route } from "react-router-dom";
import ChemistAction from "./pages/ChemistAction";
// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobCreation from "./pages/JobCreation";
import SampleCollection from "./pages/SampleCollection";
import AssignQrCode from "./pages/AssignQrCode";
import CreateJrf from "./pages/CreateJrf";
// import SamplePreparation from "./pages/sample-preparation";
import LabHeadAssignment from "./pages/⁠⁠LabHeadAssignment";
import LabHeadProgress from "./pages/lab-head-progress";
import LabCertificate from "./pages/LabCertificate";
import TestResult from "./pages/TestResult";
import SampleCollectionDetails from "./pages/SampleCollection/Details";
import LaboratoryActivity from "./pages/LaboratoryActivity";
import TestProgress from "./pages/TestProgress";
import VerificationOfTestResult from "./pages/VerificationOfTestResult";

import RequiredAuth from "./components/RequiredAuth";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        element={
          <RequiredAuth>
            <MainLayout />
          </RequiredAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path="job-creation" element={<JobCreation />} />
        <Route path="sample-collection">
          <Route index element={<SampleCollection />} />
          <Route
            path=":tcrcReferenceNumber"
            element={<SampleCollectionDetails />}
          />
        </Route>
        <Route path="assign-qr-code" element={<AssignQrCode />} />
        <Route path="lab-head-assignment" element={<LabHeadAssignment />} />
        <Route path="chemist-action" element={<ChemistAction />} />
        <Route path="test-result" element={<TestResult />} />
        <Route path="create-jrf" element={<CreateJrf />} />
        <Route path="lab-activity" element={<LaboratoryActivity />} />
        <Route path="test-progress" element={<TestProgress />} />
        <Route path="verification-of-test-result" element={<VerificationOfTestResult />} />
        <Route path="lab-head-progress" element={<LabHeadProgress />} />
        <Route path="lab-certificate" element={<LabCertificate />} />
        <Route path="*" element={<h1>No Match</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
