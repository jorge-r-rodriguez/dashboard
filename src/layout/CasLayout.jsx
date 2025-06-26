// src/layout/CasLayout.jsx
import { useEffect, useContext, useState } from "react";
import { CasUserContext } from "../context/CasUserContext";
import { casLogin } from "../utils/casClient";

export const CasLayout = ({ children }) => {
  const { casUser, setCasUser, setCasGroups } = useContext(CasUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!casUser) {
      casLogin()
        .then((data) => {
					console.log("Usuario CAS:", data.user);
        	console.log("Atributos CAS:", data.attributes);
    setCasUser(data.attributes?.commonName ?? data.user); // nombre completo o fallback
    setCasGroups(data.attributes?.memberOf || []);
        })
        .catch((err) => {
          console.error("Error de CAS:", err);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [casUser]);

  if (loading) return <div>Autenticando con CAS...</div>;

  return <>{children}</>;
};
