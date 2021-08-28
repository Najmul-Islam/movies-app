import React, { useState, useEffect, useContext } from "react";

const TypeContext = React.createContext();

const AppProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const fetchTypes = () => {
    fetch("http://localhost:1337/types")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((types) => {
        setTypes(types);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <TypeContext.Provider value={{ types }}>{children}</TypeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TypeContext);
};

export { TypeContext, AppProvider };
