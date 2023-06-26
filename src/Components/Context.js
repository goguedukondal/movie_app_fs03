import { createContext, useContext, useState } from "react";

const MyContext = createContext();
export const useData = () => useContext(MyContext);

const Context = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies(newMovie);
  };

  return (
    <MyContext.Provider value={{ movies, addMovie,}}>
      {children}
    </MyContext.Provider>
  );
};
export default Context;
