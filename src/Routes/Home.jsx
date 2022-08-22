import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">
        <h3 >Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3>Dashboard</h3>
      </Link>
    </div>
  );
}
export default Home;
