// importacion
import React from "react";
import MiComponente from "./componentes/MiComponente";
import MiSuperTabla from "./componentes/MiSuperTabla";
import RenderCondicional from "./componentes/RenderCondicional";
const estudiantes = [
  {nombre:"Pedro", edad: 20},
  {nombre:"Maria", edad: 20},
  {nombre:"Juan", edad: 20},
  {nombre:"Marcos", edad: 20},
]

const frutas = ["Manzana","Pera","uva"]

// componente tipo funcion
function App() {
  const est1 = "Marcos";
  const est2 = "Maria";

  return (
    <div>
      <h1>Funciona</h1>   
      <RenderCondicional isLoading={false}/>
      <MiComponente listado={frutas} mensaje="Este es el texto del boton" name={est1} edad={20}/>
      <MiComponente listado={frutas} mensaje="Este es el texto del boton" name={est2} edad={24} />
      <MiComponente listado={frutas} mensaje="Este es el texto del boton" name={"Jose"} edad={29} />
      <MiSuperTabla datos={estudiantes} />
    </div>
  );
}

// exportacion
export default App
