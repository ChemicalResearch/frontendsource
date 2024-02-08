import { Routes, Route } from "react-router-dom";
import ChemistAction from "./pages/ChemistAction";
// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Home from "./pages/Home";
import JobCreation from "./pages/JobCreation";
import SampleCollection from "./pages/SampleCollection";
import SamplePreparation from "./pages/SamplePreparation";
import LabHeadAssignment from "./pages/⁠⁠LabHeadAssignment";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="job-creation" element={<JobCreation />} />
        <Route path="sample-collection" element={<SampleCollection />} />
        <Route path="sample-preparation" element={<SamplePreparation />} />
        <Route path="lab-head-assignment" element={<LabHeadAssignment />} />
        <Route path="chemist-action" element={<ChemistAction />} />
        <Route path="*" element={<h1>No Match</h1>} />
      </Route>
    </Routes>
  )
}

export default App
