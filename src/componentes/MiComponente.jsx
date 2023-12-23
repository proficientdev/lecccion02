import MiBoton from "./MiBoton";
import Listado from "./Listado";
function MiComponente({ name, edad, mensaje, listado}) {

  return (
    <div>
      <p>Nombre: {name}</p>
      <p>edad: {edad}</p>
      <MiBoton mensaje={mensaje} />
      <Listado listado={listado}/>
    </div>
  );
}

export default MiComponente;
