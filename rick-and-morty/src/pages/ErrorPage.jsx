import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="text-center py-5">
      <h1>ERROR</h1>
      <p>We encountered an error on our end.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default ErrorPage;
