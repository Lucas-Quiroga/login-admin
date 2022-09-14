import React, { useState } from "react";
import Menu from "./Menu";

export default function Login() {
  //comprobamos que la sesion esté activa
  const comprobarSesion = () => {
    let sesion = localStorage.getItem("miLogin");
    if (sesion) {
      return JSON.parse(sesion); //true
    } else {
      return false;
    }
  };

  //estados
  const [miLogin, setMiLogin] = useState(comprobarSesion());
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  //   armamos una funcion para evaluar los datos
  const iniciarSesion = (e) => {
    //la función evita el recargo de pagina
    //agarra los IDs de los inputs junto con su valor
    //evalua con un IF si los valores de los IDs están en cero y arroja una alerta
    //despues evalua si los states guardan los datos ya hardcodeados y transforma el estado en TRUE
    //y sino lo deja en FALSE y limpia los inputs
    e.preventDefault();
    let txtusu = document.getElementById("txtusu").value;
    let txtpas = document.getElementById("txtpas").value;
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("complete los datos faltantes");
    } else {
      if (usu === "admin" && pas === "123") {
        setMiLogin(true);
        //en el localStorage me va a quedar registro de la sesion "activa" junto con el nombre de usuario
        localStorage.setItem("miLogin", true);
        localStorage.setItem("usu", usu);
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin(false);
        alert("error de usuario y/o contraseña!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  };

  return (
    <div
      className="container"
      style={{ background: "lightgray", marginTop: 20, padding: 20 }}
    >
      {miLogin === false ? (
        <form id="form_login">
          <div>
            <h1 style={{ color: "blue", textalign: "center" }}>LOGIN</h1>
            <label htmlFor="txtusu">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              //id del input
              id="txtusu"
              style={{ textAlign: "center" }}
              className="form-control"
              // capturamos el dato
              onChange={(e) => setUsu(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="txtpas">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              //id del input
              id="txtpas"
              style={{ textAlign: "center" }}
              className="form-control"
              // capturamos el dato
              onChange={(e) => setPas(e.target.value)}
              required
            />
          </div>
          <br />
          <input
            type="submit"
            onClick={iniciarSesion}
            className="btn btn-primary"
            value="Login"
          />
        </form>
      ) : (
        <Menu />
      )}
    </div>
  );
}
