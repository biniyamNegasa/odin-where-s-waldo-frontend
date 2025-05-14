import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-message">
      <p>
        Looks like you're lost, here follow this{" "}
        <Link className="error-link" to="/home">
          link to get back to the home page
        </Link>
      </p>
    </div>
  );
}

export default Error;
