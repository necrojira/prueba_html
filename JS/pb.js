import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const PlacementExam = () => {
  const [result, setResult] = useState(""); // Estado para almacenar el resultado
  const [error, setError] = useState(null); // Estado para errores

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/web/php/pb.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al procesar el examen");
      }

      const resultText = await response.text();
      setResult(resultText); // Actualiza el estado con el resultado
      setError(null); // Limpia errores anteriores
    } catch (err) {
      console.error("Error:", err);
      setError("Hubo un problema al procesar tu examen.");
      setResult(""); // Limpia resultados anteriores
    }
  };

  return (
    <div className="exam-container">
      <form id="placement-exam" onSubmit={handleSubmit}>
        <label>
          Pregunta 1:
          <input type="radio" name="q1" value="a" required /> A
          <input type="radio" name="q1" value="b" /> B
          <input type="radio" name="q1" value="c" /> C
        </label>
        <button type="submit">Enviar</button>
      </form>
      <div id="result">
        {error && <p className="error">{error}</p>}
        {result && <p className="success">{result}</p>}
      </div>
    </div>
  );
};

// Renderizar React
const root = createRoot(document.getElementById("root"));
root.render(<PlacementExam />);
