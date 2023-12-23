

export const Listado = ({ listado }) => {
  return (
    <ul>
      {listado.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

