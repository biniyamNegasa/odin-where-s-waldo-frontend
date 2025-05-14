import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "2rem auto",
        color: "#b00020",
        fontWeight: 600,
        fontSize: "1.2rem",
      }}
    >
      <p>
        Looks like you're lost, here follow this{" "}
        <Link
          to="/home"
          style={{ color: "#2d3a4b", textDecoration: "underline" }}
        >
          link to get back to the home page
        </Link>
      </p>
    </div>
  );
}

export default Error;
