import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";



export const FiltroSolicitudes = ({ handleChange, toggleDrawer }) => {
  return (
    <div className="filter-form-container p-8 h-full relative flex flex-col">
      <div className="flex items-center gap-4 pb-5">
        <ArrowBackIcon />
        <span className="text-2xl font-bold">Busqueda</span>
      </div>

      <form className="p-4 h-full flex flex-col justify-between">
        <div>
          <div className="filter-header-title">
            <h4>Solicitudes</h4>
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Tipo de usuario</label>
            <input onChange={(e) => handleChange(e)} className="custom-input" />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Empresa</label>
            <input onChange={(e) => handleChange(e)} className="custom-input" />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Correo electronico</label>
            <input onChange={(e) => handleChange(e)} className="custom-input" />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Teléfono de contacto</label>
            <input onChange={(e) => handleChange(e)} className="custom-input" />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Cargo</label>
            <input onChange={(e) => handleChange(e)} className="custom-input" />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Nit</label>
            <input onChange={(e) => handleChange(e)} className="custom-input" />
          </div>
        </div>
        <div className="flex justify-between px-4 gap-12">
          <button onClick={() => toggleDrawer(false)} className="btn btn-3 i-w-full" variant="contained">
            Cancelar
          </button>
          <button onClick={() => toggleDrawer(false)} className="btn btn-1 i-w-full" variant="contained">
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
};
