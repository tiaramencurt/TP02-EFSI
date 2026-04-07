import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";
import "./App.css";

function App(){

return(

<div>

<Header/>

<div className="container">

<div className="row">

<Formulario/>

<ListaCitas/>

</div>

</div>

</div>

)

}

export default App;