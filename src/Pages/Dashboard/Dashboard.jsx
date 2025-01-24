import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <p>Você não está autenticado. Faça login.</p>;
  }

  const handleLogout = () => {
    logout();
    navigate("/login"); // Agora o redirecionamento acontece corretamente
  };

  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role(s):</strong> {user.roles.length > 0 ? user.roles.join(", ") : "Nenhuma"}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;