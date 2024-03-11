import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Component/Form";
import ValidateForm from "./Component/ValidateForm";
import { Calculator } from "./Component/Calculator";
import { Currency } from "./Component/Currency";
import "./App.css";
import { Timer } from "./Component/Timer";
import { Api } from "./Component/Api";
import { A } from "./Parent/A";

function App() {
  return (
    <>
      <div>
        <center>
          <h1>Hello</h1>
        </center>
        <div className="nav sticky-top">
          <a href="/Form">Form </a>

          <a href="/Calculator">Calculator</a>
          <a href="/Currency">Currency </a>
          <a href="/Timer">Timer </a>
          <a href="/Api">Api </a>
          <a href="/Parent">useContext</a>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/Calculator" element={<Calculator />}></Route>
          <Route path="/Currency" element={<Currency />}></Route>
          <Route path="/Form" element={<ValidateForm />}></Route>
          <Route path="/Timer" element={<Timer />}></Route>
          <Route path="/API" element={<Api />}></Route>
          <Route path="/Parent" element={<A />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
