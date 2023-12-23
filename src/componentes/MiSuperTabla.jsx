import MiRow from "./MyRow";

function MiSuperTabla({ datos }) {
  if (datos != null || datos != undefined) {
    return (
      <table>
        <theader>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </theader>
        <tbody>
          {datos.map((est) => (
            <MiRow key={est.nombre} nombre={est.nombre} edad={est.edad} />
          ))}
        </tbody>
      </table>
    );
  }

  return (<span>No hay datos que mostrar</span>);
}

export default MiSuperTabla;
