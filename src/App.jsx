import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword.jsx";
import RecoverPassword from "./Pages/ForgotPassword/RecoverPassword.jsx";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recover-password/:token" element={<RecoverPassword />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
