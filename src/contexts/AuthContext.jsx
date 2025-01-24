import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types"; // Importa PropTypes

// Criamos o contexto de autenticação
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verifica o token ao iniciar a aplicação
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          email: decoded.sub,
          roles: Array.isArray(decoded.roles) ? decoded.roles : [],
        });
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  // Função de login
  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser({
      email: decoded.sub,
      roles: Array.isArray(decoded.roles) ? decoded.roles : [],
    });
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Adiciona a validação das props
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
