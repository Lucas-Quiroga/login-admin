import React, { useState } from "react";

export default function Estadistica() {
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
  const [registrosLogin] = useState(ObtenerRegistros());

  // creamos una funcion para sacar la estadistica que va a tomar como parametro un número
  const miEstadistica = (opcion) => {
    let i = 0;
    let resultado = 0;
    let miObjeto;

    if (opcion === 1) {
      //determina la cantidad
      resultado = registrosLogin.length;
    } else if (opcion === 2) {
      //determina la suma
      for (i = 0; i < registrosLogin.length; i++) {
        miObjeto = registrosLogin[i];
        resultado += parseInt(miObjeto.precio);
      }
    } else if (opcion === 3) {
      //determina el promedio
      //para sacar el promedio, acumule los precios, los sume y luego la suma la divide por la cantidad
      for (i = 0; i < registrosLogin.length; i++) {
        miObjeto = registrosLogin[i];
        resultado += parseInt(miObjeto.precio);
      }
      //sacamos el resultado y usamos toFixed para que no salgan tanto decimales
      resultado = (resultado / registrosLogin.length).toFixed(2);
    }

    return resultado;
  };
  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">Resumen Estadístico</div>

      <div className="table-responsive">
        {/* cuando haya elemento nos muestra las estadisticas y sino un texto */}
        {registrosLogin.length > 0 ? (
          <div
            className="row row-cols-1 row-cols-md-3 g-2"
            style={{ padding: 5, width: "90%", margin: "0 auto" }}
          >
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cantidad de Pinturas</h5>
                  <p className="card-text"> {miEstadistica(1)} </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Suma de Precios</h5>
                  <p className="card-text"> {miEstadistica(2)} </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Promedio de Precios</h5>
                  <p className="card-text"> {miEstadistica(3)} </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="h5" style={{ color: "red" }}>
            "No hay registros para la estadistica"
          </p>
        )}
      </div>
    </div>
  );
}
