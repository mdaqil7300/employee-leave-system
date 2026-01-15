import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, allowedRoles, children }) => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    if (allowedRoles.toLowerCase() !== user.role.toLowerCase()) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
