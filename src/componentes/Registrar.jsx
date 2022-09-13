import React, { useState, useEffect } from "react";

export default function Registrar() {
  //para guardar los datos permanentemente del localStorage, capturamos los datos del array para obtener una copia del registro e irlos cargando sobre la misma
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

  //state para guardar el contenido para el localstorage
  //en el estado llamamos a la funcion "obternerRegistros para mantener los datos del Storage"
  const [registrosLogin, setRegistrosLogin] = useState(ObtenerRegistros());

  //estados para cada dato del formulario
  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");

  const botonGuardar = (e) => {
    //capturamos todos los elementos que estan asociados a los inputs
    e.preventDefault();
    //crea un objeto
    let miObjeto = {
      titulo,
      estilo,
      tecnica,
      precio,
    };
    //y lo termina agregando al array
    setRegistrosLogin([...registrosLogin, miObjeto]);
    //por ultimo se limpia el formulario
    limpiarFormulario();
  };

  //cuando haya cambios en los registros los guarda en el localStorage (pero no es permanente)
  useEffect(
    () => {
      localStorage.setItem("registrosLogin", JSON.stringify(registrosLogin));
    }, //para que no quede en segundo plano ejecutandose lo ponemos en los corchetes
    [registrosLogin]
  );

  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setTecnica("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  };

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">
        Formulario De Registro De Pinturas
        <br />
        {/* aplicamos un onSubmit para capturar todos los datos del formulario correspondiente */}
        <form id="miFormulario" onSubmit={botonGuardar}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input
                className="form-control form-control-lg text-center"
                type="text"
                placeholder="Digite El Título"
                //capturamos el dato
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="col-6">
              <select
                className="form-select form-select-lg text-center"
                //capturamos el dato
                onChange={(e) => setEstilo(e.target.value)}
                required
              >
                <option value="">Indique Estilo</option>
                <option value="Retrato">Retrato</option>
                <option value="Paisaje">Paisaje</option>
                <option value="Desnudo">Desnudo</option>
              </select>
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <select
                className="form-select form-select-lg text-center"
                //capturamos el dato
                onChange={(e) => setTecnica(e.target.value)}
                required
              >
                <option value="">Indique Técnica</option>
                <option value="Óleo">Óleo</option>
                <option value="Acrílico">Acrílico</option>
                <option value="Pastel">Pastel</option>
              </select>
            </div>
            <div className="col-6">
              <input
                className="form-control form-control-lg text-center"
                type="number"
                min="1"
                max="100000000"
                placeholder="Digite El Precio"
                //capturamos el dato
                onChange={(e) => setPrecio(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col">
              <button className="btn btn-primary btn-lg">Guardar Datos</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
