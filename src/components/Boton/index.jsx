import "./Boton.css";

function Boton({texto, tipo}) {
  return(
    <button className={`u-full-width button ${tipo}`}>
      {texto}
    </button>
  )
}

export default Boton;