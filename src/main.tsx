import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import AdminLayout from "./pages/dashboard/layout.tsx";
import Admin from "./pages/dashboard/admin.tsx";
import User from "./pages/dashboard/user.tsx";
import NoPage from "./pages/no-page.tsx";
import Members from "./pages/members.tsx";
import AddMembers from "./pages/addMembers.tsx";
import UserProfile from "./pages/userProfile.tsx";
import EditProfile from "./pages/editProfile.tsx";

import { ClerkProvider } from "@clerk/clerk-react";

// importing the publish key of clerk
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/members"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <Router>
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route path="members" element={<Members />} />
            <Route path="membership-form" element={<AddMembers />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="edit-user-profile" element={<EditProfile />} />
            <Route path="dashboard" element={<AdminLayout />}>
              <Route path="admin" element={<Admin />} />
              <Route path="user" element={<User />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </ClerkProvider>
  </StrictMode>
);
