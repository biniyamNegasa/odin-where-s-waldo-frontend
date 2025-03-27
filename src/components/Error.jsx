import { Link } from "react-router-dom";

function Error() {
  return (
    <p>
      Looks like you're lost, here follow this{" "}
      <Link to="/home">link to get back to the home page </Link>
    </p>
  );
}

export default Error;
