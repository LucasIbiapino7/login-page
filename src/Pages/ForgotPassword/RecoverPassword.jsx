import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./RecoverPassword.css";

function RecoverPassword() {
  const { token } = useParams(); // Captura o token da URL
  const [password, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(token);
      await axios.put("http://localhost:8080/auth/new-password", {
        token,
        password,
      });

      toast.success("Senha redefinida com sucesso! Faça login.", {
        position: "top-right",
      });

      navigate("/login"); // Redireciona para o login
    } catch (erro) {
      toast.error("Erro ao redefinir a senha. O link pode ter expirado.", {
        position: "top-right",
      });
      console.log(erro);
    }
  };

  return (
    <div className="recover-password-container">
      <h2>Redefinir Senha</h2>
      <form onSubmit={handleSubmit}>
        <label>Nova Senha:</label>
        <input
          type="password"
          placeholder="Digite sua nova senha"
          value={password}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button type="submit">Alterar Senha</button>
      </form>
    </div>
  );
}

export default RecoverPassword;
