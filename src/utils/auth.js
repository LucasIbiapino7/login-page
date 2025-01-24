import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; 

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token armazenado: ", token)

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          email: decoded.sub,
          roles: Array.isArray(decoded.roles) ? decoded.roles : [],
        });
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        setUser(null);
      }
    }
  }, []); 

  return user;
};
