import React,{Component} from "react";

class Menu extends Component{
    render(){
        return(
            //se copia el codigo de bootstrap -components-navbar-
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">CAR-G11-E9</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/usuarios">Usuarios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/mensajes">Mensajes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/roles">Roles</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Usuarios
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/usuarios">Listar Usuario</a></li>
                      <li><a className="dropdown-item" href="/agregarUsuario">Agregar Usuario</a></li>
                      <li><a className="dropdown-item" href="/editarUsuario">Editar Usuario</a></li>
                    </ul>
                  </li>

                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav> 
        )
    }
}

export default Menu;