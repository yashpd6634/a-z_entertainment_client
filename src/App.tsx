import { useContext } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:8000/api/";
  const {state} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={state.user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!state.user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!state.user ? <Login /> : <Navigate to="/" />}
        />
        {state.user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
