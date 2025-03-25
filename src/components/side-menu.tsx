import { Link } from "react-router-dom";
import "../assets/styles/side-menu.css";
export default function SideMenu() {
  return (
    <div className="left-menu p-2">
      <div className="flex justify-center text-2xl mb-2">Side Menu</div>
      <div className="flex flex-col gap-2">
        <Link to="/dashboard/admin" className="flex justify-center">
          Admin
        </Link>
        <Link to="/dashboard/user" className="flex justify-center">
          User
        </Link>
        <Link to="/home" className="flex justify-center">
          Home
        </Link>
        <Link to="/blog" className="flex justify-center">
          Blog
        </Link>
      </div>
    </div>
  );
}
