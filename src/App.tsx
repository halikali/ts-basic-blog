import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";

import routes from "./routes";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.page} key={route.name} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
