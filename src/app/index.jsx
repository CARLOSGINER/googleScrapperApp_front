import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/home";
import Login from "../routes/login";
import "./app.module.css";
import { DataContextProvider } from "../context/dataContext";
import { InputTextContextProvider } from "../context/inputTextContext";

export default function App() {
  return (
    <DataContextProvider>
    <InputTextContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
    </InputTextContextProvider>
    </DataContextProvider>
  );
}
