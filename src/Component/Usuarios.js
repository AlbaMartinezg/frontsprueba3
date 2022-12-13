import React,{Component} from "react";
import {Link } from "react-router-dom";
import axios from "axios";

class Usuarios extends Component{
    state ={
        Usuarios:[]
    }
    componentWillMount(){
        //con ctrl+D se puede seleccionar una palabra que este muchas veces y se hace cambio
        this.getUsuarios();
    }
    getUsuarios = ()=>{
        axios.get("http://localhost:3000/api/usuarios")
        .theen(res=>{
            console.log("Usuarios");
            console.log(res.data.doc);
            this.setState({
                Usuarios:res.data.doc
            })

        })
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
        //console.log(this.state.Usuarios)
        return(
            <React.Fragment>
                <h1>Usuarios</h1>
                <Link to="/agregarUsuario" className="btn btn-dark">Agregar Usuario</Link>
                <button id="btnCrear" type="button" class="btn btn-primary">Crear Cliente</button>

                <table id="clientes" class="table mt-2 table-bordered table-striped">">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Correo</td>
                        <td>Contraseña</td>
                        <td>Imagen</td>
                        <td>Rol</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                    <tbody>
                            
                    </tbody>                  
                </table>                

            </React.Fragment>
        );
    }
}

export default Usuarios;