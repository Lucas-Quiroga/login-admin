//importamos el state para mantener el estado de los registros del localStorage y el useEffect para cuando borremos un registro del estado, desaparezca del localStorage
import React, { useState, useEffect } from "react";

export default function Listar() {
  const ObtenerRegistros = () => {
    let datos = localStorage.getItem("registrosLogin");
    //si la variable quedo con datos el array existia en el localStorage
    if (datos) {
      return JSON.parse(datos);
    } else {
      //de lo contrario si la variable nunca existio el registro del array, no habrian datos por ende retornaria un array vacio
      return [];
    }
  };

  //en el estado llamamos a la funcion "obternerRegistros para mantener los datos del Storage"
  const [registrosLogin, setRegistrosLogin] = useState(ObtenerRegistros());

  const botonEliminar = (miIndex) => {
    //la funcion recibe la posición del registro que queremos eliminar, nos pregunta si la queremos borrar y si ponemos qui si..
    if (window.confirm("estas seguro de querer eliminar el registro?")) {
      //captura todos los registros que hay en ese momento, y los filtra dejando fuera unicamente el elemento que tenga la posición que le estoy pasando
      let registroFiltrado = registrosLogin.filter((e, index) => {
        //si es distinta la posición de lo que esta guardado con el registro que vamos a borrar, va a aparecer
        return miIndex !== index;
      });
      setRegistrosLogin(registroFiltrado);
    }
  };

  useEffect(() => {
    localStorage.setItem("registrosLogin", JSON.stringify(registrosLogin));
  }, [registrosLogin]);

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">Listado De Registro De Pinturas</div>

      <div className="table-responsive">
        {/* si hay un archivo que me mapee todo los datos y sino que me muestre un texto */}
        {registrosLogin.length > 0 ? (
          <>
            <table
              className="table table-bordered table-hover"
              style={{ marginTop: 12 }}
            >
              <thead
                className="text-center"
                style={{ background: "lightgray" }}
              >
                <tr>
                  <th>#</th>
                  <th>Titulo</th>
                  <th>Estilo</th>
                  <th>Tecnica</th>
                  <th>Precio</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody className="text-center align-baseline">
                {/* mapeamos en la tabla los datos que tenemos en el estado */}
                {registrosLogin.map((x, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{x.titulo}</th>
                    <th>{x.estilo}</th>
                    <th>{x.tecnica}</th>
                    <th>{x.precio}</th>
                    <td className="text-center">
                      {/* cuando presionemos el boton, le vamos a pasar la posición del registro que vamos a eliminar */}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => botonEliminar(index)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="h5" style={{ color: "red" }}>
            "No hay registros para listar"
          </p>
        )}
      </div>
    </div>
  );
}
