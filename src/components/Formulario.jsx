import Input from "./Input";

function Formulario(){

    return(

        <div className="one-half column">

            <h2>Crear mi Cita</h2>

            <form>

                <Input label="Nombre Mascota"/>
                <Input label="Nombre Dueño"/>

                <label>Fecha</label>
                <input type="date" className="u-full-width"/>

                <label>Hora</label>
                <input type="time" className="u-full-width"/>

                <label>Sintomas</label>
                <textarea className="u-full-width"></textarea>

                <button className="u-full-width button-primary">
                    Agregar Cita
                </button>

            </form>

        </div>

    )

}

export default Formulario;