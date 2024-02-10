import { Routes, Route } from "react-router-dom";
import ChemistAction from "./pages/ChemistAction";
// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobCreation from "./pages/JobCreation";
import SampleCollection from "./pages/SampleCollection";
import SamplePreparation from "./pages/SamplePreparation";
import LabHeadAssignment from "./pages/⁠⁠LabHeadAssignment";
import LabHeadProgress from "./pages/LabHeadProgress";
import LabCertificate from "./pages/LabCERtificate";
import TestResult from "./pages/TestResult";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="job-creation" element={<JobCreation />} />
        <Route path="sample-collection" element={<SampleCollection />} />
        <Route path="sample-preparation" element={<SamplePreparation />} />
        <Route path="lab-head-assignment" element={<LabHeadAssignment />} />
        <Route path="chemist-action" element={<ChemistAction />} />
        <Route path="test-result" element={<TestResult />} />
        <Route path="lab-head-progress" element={<LabHeadProgress />} />
        <Route path="lab-certificate" element={<LabCertificate />} />
        <Route path="*" element={<h1>No Match</h1>} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default App
