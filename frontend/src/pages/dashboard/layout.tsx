import { Outlet } from "react-router-dom";
import SideMenu from "../../components/side-menu";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <SideMenu />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
