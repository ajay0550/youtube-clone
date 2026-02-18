import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout onSearch={setSearchTerm}>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;

// 117/141
