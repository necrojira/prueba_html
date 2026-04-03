const Us = () => {
  const handleLogout = () => {
    window.location.href = "/web/php/cerrar.php";
  };

  const handleDeleteCourse = () => {
    window.location.href = "/web/php/eliminar_curso.php";
  };

  return (
    <div className="dashboard">

      <div className="sidebar">
       
        <img src="/web/img/logo.JPG" alt="Profile Image" width="100"/>
        
        <button
          className="info-button"
          onClick={() => (window.location.href = "/web/php/infp.php")}
        >
          Información personal
        </button>
      </div>

      <div className="main-content">
        <div className="header-container">
          <h1>Welcome</h1> 
          <button
            className="schedule-button"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
        <div className="notification">
          Recuerda que ya casi empiezan tus clases
        </div>
        <div className="buttons">
          <button
            className="schedule-button"
            onClick={() => (window.location.href = "/web/php/horario.php")}
          >
            Horario
          </button>
          <button
            className="plan-button"
            onClick={() => (window.location.href = "/web/html/plan.html")}
          >
            Plan
          </button>
          <button
            className="plan-button"
            onClick={handleDeleteCourse}
          >
            Eliminar curso
          </button>
        </div>
      </div>

      <footer>© Inglés para todos</footer>
    </div>
  );
};

ReactDOM.render(<Us />, document.getElementById("root"));
