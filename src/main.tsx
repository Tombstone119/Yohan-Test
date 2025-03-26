import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/members.tsx";
import AdminLayout from "./pages/dashboard/layout.tsx";
import Admin from "./pages/dashboard/admin.tsx";
import User from "./pages/dashboard/user.tsx";
import NoPage from "./pages/no-page.tsx";
import Members from "./pages/members.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="dashboard" element={<AdminLayout />}>
            <Route path="admin" element={<Admin />} />
            <Route path="user" element={<User />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
