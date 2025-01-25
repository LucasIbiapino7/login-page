import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Cadastro.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/auth/register", {
        email,
        password,
        role: "USER",
      });

      toast.success("Cadastro realizado com sucesso! Faça login.", {
        position: "top-right",
      });

      navigate("/login"); 
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Este e-mail já está em uso.", { position: "top-right" });
      } else {
        toast.error("Erro ao cadastrar. Tente novamente.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Crie sua conta</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="register-button" type="submit">Cadastrar</button>
      </form>

      <p>
        Já tem uma conta? <a href="/login">Faça login</a>
      </p>
    </div>
  );
}

export default Cadastro;
