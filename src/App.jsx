import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Error from "./components/views/Error";
import Administrador from "./components/views/Administrador"
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import SobreNosotros from "./components/views/SobreNosotros";
import"./components/views/sobreNotros.css"
import { useState } from "react";
function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  return (
    <BrowserRouter>
    <Menu  usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
           <Route exact path="/" element={<Inicio></Inicio>}></Route>
           <Route exact path="/administrar" element={<Administrador></Administrador>}></Route>
           <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
           <Route exact path="/registar" element={<Registro setUsuarioLogueado={setUsuarioLogueado}></Registro>}></Route>
           <Route exact path="/sobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
           <Route exact path="*" element={<Error></Error>}></Route>
        </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
