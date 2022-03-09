const App = () => {
  const titulo = "Mi primera APP";
  const colores = {
    primary: "text-primary",
    info: "text-info",
    danger: "text-danger",
  };
  
  const user = true;

  const SaludoBienvenida = () => <h2 className="text-warning">Bienvenido!</h2>;

  const SaludoDespedida = () => (
    <h2 className="text-secondary">Usuario offline</h2>
  );

  return (
    <div className="container">
      <h1 className={colores.primary}>{titulo}</h1>

      {user ? <SaludoBienvenida /> : <SaludoDespedida />}
    </div>
  );
};

export default App;
