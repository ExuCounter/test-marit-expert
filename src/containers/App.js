import "./App.css";
import React, { useEffect, useState } from "react";
import useRoutes from "../routes/index";
import useAuthAPI from "../hooks/authAPI";
import AuthAPIContext from "../context/AuthAPIContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const { login, logout, sessionCheck } = useAuthAPI();
  const routes = useRoutes(loading, loggedIn);

  useEffect(() => {
    sessionCheck().then((data) => {
      if (data.success) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="main">
      <AuthAPIContext.Provider value={{ login, logout, sessionCheck }}>
        {routes}
      </AuthAPIContext.Provider>
    </div>
  );
};

export default App;
