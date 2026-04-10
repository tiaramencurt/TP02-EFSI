import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import CampoFecha from "../CampoFecha";
import CampoHora from "../CampoHora";
import CampoTextarea from "../CampoTextarea";
import Boton from "../Boton";

function Formulario(){
return(
<div className="one-half column">
<h2>Crear mi Cita</h2>
<form>
<CampoTexto label="Nombre Mascota" placeholder="Nombre Mascota"/>
<CampoTexto label="Nombre Dueño" placeholder="Nombre dueño"/>
<CampoFecha/>
<CampoHora/>
<CampoTextarea/>
<Boton texto="Agregar Cita" tipo="primary"/>
</form>
</div>
)
}
export default Formulario;