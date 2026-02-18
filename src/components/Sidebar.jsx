import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/profile">Profile</Link>

      
    </div>
  );
}

export default Sidebar;
