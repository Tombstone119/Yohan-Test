import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">This is home</h1>
      <p className="text-lg">This is the home page</p>
      <div>
        <Link
          to="/dashboard/admin"
          className="inline-flex justify-center border p-2"
        >
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
}
