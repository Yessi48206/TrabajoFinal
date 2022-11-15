import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Error from "./components/views/Error";
import Administrador from "./components/views/Administrador"
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";


function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
        <Routes>
           <Route exact path="/" element={<Inicio></Inicio>}></Route>
           <Route exact path="/administrar" element={<Administrador></Administrador>}></Route>
           <Route exact path="*" element={<Error></Error>}></Route>
        </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
