import { Routes, Route } from "react-router-dom";
import PublicPortfolio from "./pages/PublicPortfolio";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPortfolio />} />
      <Route path="/admin-mp247" element={<AdminPanel />} />
    </Routes>
  );
}
