import React,{Component} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Component/Menu";
import AgregarUsuario from "./Component/agregarUsuario";
import Usuarios from "./Component/Usuarios";
import EditarUsuario from "./Component/editarUsuario";


class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path ="/"  element ={<div><h1>Home</h1></div>}/>
                    <Route path ="/usuarios"  element ={<Usuarios/>}/>
                    <Route path ="/agregarUsuario"  element ={<AgregarUsuario/>}/>
                    <Route path ="/editarUsuario"  element ={<EditarUsuario/>}/>

                </Routes>
            </BrowserRouter>
        );
    }
}

export default Rutas;