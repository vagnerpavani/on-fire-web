import DashboardPage from "./pages/dashboard/DashboardPage";
import StreakPage from "./pages/streak/StreakPage";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StreakPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
