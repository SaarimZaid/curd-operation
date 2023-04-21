// import Counter from "./pages/Counter";

// libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-zinc-950 h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
