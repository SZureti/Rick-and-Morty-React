import { Link } from "react-router";

function NotFound() {
  return (
    <div className="text-center py-5">
      <h1>404 — Page Not Found</h1>
      <p>Wubba lubba dub dub! That page doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;
