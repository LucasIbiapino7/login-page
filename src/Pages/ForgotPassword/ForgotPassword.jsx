import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./RecoverPassword.css"

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/auth/recover-token", { email });

      toast.success(
        "Se este e-mail existir, você receberá um link para redefinir sua senha.",
        {
          position: "top-right",
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("E-mail não encontrado.", { position: "top-right" });
      } else {
        toast.error("Erro ao solicitar recuperação de senha.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Recuperar Senha</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar Link de Recuperação</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
