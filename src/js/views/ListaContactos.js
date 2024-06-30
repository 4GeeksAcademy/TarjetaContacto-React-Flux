import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/listaContactos.css"

export const ListaContactos = () => {

	const { store, actions } = useContext(Context);

	const contactos = store.listaContactos?.contacts;
	console.log('lista de contactos: ', contactos);



	const handleClick = (id) => {
		console.log("hola");
		actions.actualizarContacto()
		console.log('Se ha clicado en el id: ', id);
	}


	const eliminarContacto = (contacto) => {
		const confirmar = window.confirm(`Seguro que deseas eliminar el contacto ${contacto.name} ??`);
		if (confirmar) {
			actions.eliminarContacto(store.miUsuario, contacto.id);
			alert("Contacto eliminado")
			window.location.reload()
		}
	}




	if (contactos && contactos.length > 0) {
		return (
			<div className="container">

				<ul className="list-group container-fluid">
					{contactos.map((item, index) => (
						<li key={index} className="list-group-item filas">
							<div className="espacioFoto">
							</div>
							<div className="espacioDatos">
								<h4>{item.name}</h4>
								<p className="datoTelephone"><span className="glyphicon">&#xe182;</span> {item.phone}</p>
								<p className="datoEmail"><i className="material-icons">&#xe0be;</i> {item.email}</p>
								<p className="datoAddress"><i className="material-icons">&#xe0c8;</i> {item.address}</p>
							</div>

							{/* BOTONES PARA EDITAR CONTACTO Y ELIMINAR CONTACTO */}
							<div className="iconos">

								{/* Con link to le indicamos que tiene que ir al componente de crearContacto/id del contacto que queramos
								modificar */}
								<Link
								to={`/crearcontactos/${item.id}`}> 
									<button >
										<span className="glyphicon glyphicon-pencil"></span>
									</button>
								</Link>




								<button onClick={() => eliminarContacto(item)}>
									<span className="bi bi-trash-fill icono-eliminar"></span>
								</button>
							</div>
						</li>
					))}
				</ul>
				<br />
				<div>
				</div>

			</div>
		);
	} else {
		return (
			<div className="container">
				<p>No hay contactos para mostrar.</p>
			</div>
		);
	}
}

export default ListaContactos;

<Link to="/">
	<button className="btn btn-primary">Back home</button>
</Link>

