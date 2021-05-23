import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Swal from "sweetalert2";
import image from "./../../assets/img/contact/amico.svg";

export const CreateFaq = ({ toggleDrawer }) => {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");

  const handleChangeQuestion = (e) => {
    setquestion(e.target.value);
  };

  const handleChangeAnswer = (e) => {
    setanswer(e.target.value);
  };

  const submit = () => {
    toggleDrawer(false);
    setTimeout(() => {
      Swal.fire({
        imageUrl: image,
        html:
          '<div class="w-full mb-20 flex flex-col items-center">' +
          '<h2 class="text-1 mb-6 text-center">Pregunta frecuente agregada</h2>' +
          '<p class="max-w-xs text-2 text-center">La pregunta frecuente fue agregada exitosamente</p>' +
          "</div>",
      });
    }, 500);
  };

  return (
    <div className="filter-form-container p-8 h-full relative flex flex-col">
      <div className="flex items-center gap-4 pb-5">
        <span className="cursor-pointer" onClick={() => toggleDrawer(false)}>
          <ArrowBackIcon />
        </span>
        <span className="text-2xl font-bold">Crear pregunta frecuente</span>
      </div>

      <form>
        <div className="custom-input-group">
          <label className="custom-label">Titulo de la pregunta</label>
          <textarea
            value={question}
            onChange={(e) => handleChangeQuestion(e)}
            rows="2"
            className="custom-input"
            placeholder="texto"
          />
        </div>
        <div className="custom-input-group">
          <label className="custom-label">Respuesta de la pregunta</label>
          <textarea
            value={answer}
            onChange={(e) => handleChangeAnswer(e)}
            rows="10"
            className="custom-input"
            placeholder="texto"
          />
        </div>
      </form>

      <div className="flex justify-between gap-12">
        <button onClick={() => toggleDrawer(false)} className="btn btn-3 i-w-full" variant="contained">
          Cancelar
        </button>
        <button onClick={() => submit()} className="btn btn-1 i-w-full" variant="contained">
          Guardar
        </button>
      </div>
    </div>
  );
};
