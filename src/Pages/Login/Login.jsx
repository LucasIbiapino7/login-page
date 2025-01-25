import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema), // Integra Yup ao react-hook-form
  });

  const { login } = useContext(AuthContext);

  // Função chamada ao enviar o formulário
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );
      const token = response.data.accessToken;
      toast.success("Login bem-sucedido!", { position: "top-right" });
      login(token); // Agora usamos o contexto para autenticar o usuário
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais!", { position: "top-right" });
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Acesse sua conta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <p className="error-message">{errors.email?.message}</p>

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p className="error-message">{errors.password?.message}</p>

        <button type="submit" className="login-button">
          Entrar
        </button>

        <div className="login-links">
          <Link to="/cadastro" className="register-button">
            Criar conta
          </Link>
          <Link to="/forgot-password" className="forgot-password">
            Esqueceu a senha?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
