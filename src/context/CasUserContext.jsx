import { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto
export const CasUserContext = createContext(null);

// Proveedor del contexto
export const CasUserProvider = ({ children }) => {
  // Restaurar usuario desde localStorage si existe
  const [casUser, setCasUser] = useState(() => {
    const storedUser = localStorage.getItem("casUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [casGroups, setCasGroups] = useState(() => {
    const storedGroups = localStorage.getItem("casGroups");
    return storedGroups ? JSON.parse(storedGroups) : [];
  });

  // Guardar usuario y grupos cada vez que cambian
  useEffect(() => {
    if (casUser) {
      localStorage.setItem("casUser", JSON.stringify(casUser));
    } else {
      localStorage.removeItem("casUser");
    }
  }, [casUser]);

  useEffect(() => {
    if (casGroups?.length) {
      localStorage.setItem("casGroups", JSON.stringify(casGroups));
    } else {
      localStorage.removeItem("casGroups");
    }
  }, [casGroups]);

  return (
    <CasUserContext.Provider value={{ casUser, setCasUser, casGroups, setCasGroups }}>
      {children}
    </CasUserContext.Provider>
  );
};

// Hook para acceder fácilmente al contexto
export const useCasUserContext = () => useContext(CasUserContext);
