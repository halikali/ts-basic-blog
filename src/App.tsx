import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";

import { getDate } from "store/actions/exampleAction";
import routes from "./routes";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDate());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.page} key={route.name} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
