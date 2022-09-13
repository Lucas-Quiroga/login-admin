import React from "react";

export default function Estadistica() {
  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">Resumen Estadístico</div>

      <div className="table-responsive">
        <div
          className="row row-cols-1 row-cols-md-3 g-2"
          style={{ padding: 5, width: "90%", margin: "0 auto" }}
        >
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cantidad de Pinturas</h5>
                <p className="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Suma de Precios</h5>
                <p className="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Promedio de Precios</h5>
                <p className="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
