import "./ListaCitas.css";
import Cita from "../Cita";
import { useState } from "react";

function ListaCitas() {
    const [citas] = useState([
        {
            mascota: "Nina",
            dueno: "Martin",
            fecha: "2021-08-05",
            hora: "08:20",
            sintomas: "Le duele la pierna"
        },
        {
            mascota: "Sifon",
            dueno: "Flecha",
            fecha: "2023-08-05",
            hora: "09:24",
            sintomas: "Duerme mucho"
        }
    ])
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map((cita, index) => (
                <Cita
                    key={index}
                    cita={cita}
                />
            ))}
        </div>
    )
}
export default ListaCitas;