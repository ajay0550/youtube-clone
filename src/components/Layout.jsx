import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children, onSearch }) {
  return (
    <>
      <Navbar onSearch={onSearch} />
      <div className="main-layout">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default Layout;
