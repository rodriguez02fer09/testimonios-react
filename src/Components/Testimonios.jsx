import React from "react";
import "../styles/testimonios.css";

export default function Testimonios(props) {
  return (
    <div className="container-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../Imagenes/testimonio-${props.imagen}.png`)}
        alt="foto de emma"
      />

      <div className="contenedor-info-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}{" "}
        </p>
        <p className="cargo-testimonio">
          {props.cargo}en {props.empresa}{" "}
        </p>
        <p className="descripcion-testimonio">{props.testimonio} </p>
      </div>
    </div>
  );
}
