import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.jsx";
import PropTypes from "prop-types"; // Importa PropTypes

function PrivateRoute({ element }) {
    const { user } = useContext(AuthContext);
    return user ? element : <Navigate to="/login" />;
}

// Adiciona a validação das props
PrivateRoute.propTypes = {
    element: PropTypes.node.isRequired,
};


export default PrivateRoute;
