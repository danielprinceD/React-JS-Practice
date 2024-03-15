import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import { Auth, useAuth } from "./Credentials/Auth";
import { Register } from "./Credentials/Register";
import { Login } from "./Credentials/Login";
import { Home } from "./Home/Home";
function App() {
  const auth = useAuth();
  return (
    <div className="App">
      <Auth>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
