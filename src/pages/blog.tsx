import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">This is blog</h1>
      <div>
        <Link
          to="/dashboard/admin"
          className="inline-flex justify-center border p-2"
        >
          User Dashboard
        </Link>
      </div>
    </div>
  );
}
