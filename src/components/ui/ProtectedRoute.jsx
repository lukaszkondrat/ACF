import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useUser } from "../auth/useUser";
import { useNavigate } from "react-router-dom";

import styles from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
