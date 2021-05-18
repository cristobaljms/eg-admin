import React, { useState } from "react";
import ExcelIcon from "../../../assets/img/common/excel-icon.svg";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Drawer, Fade, Modal } from "@material-ui/core";
import { Paginator } from "../../../components/Paginator/Paginator";

import "./Solicitudes.scss";

export const Solicitudes = () => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [drawerFilter, setDrawerFilter] = useState(false);

  const [open, setOpen] = React.useState(false);

  const data = [
    {
      id: 1,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Proveedor",
    },
    {
      id: 2,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente/Proveedor",
    },
    {
      id: 3,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Proveedor",
    },
    {
      id: 4,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente",
    },
    {
      id: 5,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Proveedor",
    },
    {
      id: 6,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Proveedor",
    },
    {
      id: 7,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente/Proveedor",
    },
    {
      id: 8,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Proveedor",
    },
    {
      id: 9,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente",
    },
    {
      id: 10,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente",
    },
    {
      id: 11,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente",
    },
    {
      id: 12,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente",
    },
    {
      id: 13,
      company: "Gas natural S.A.S",
      email: "gas_natural@gmail.com",
      phone: "3016578474",
      type: "Cliente",
    },
  ];

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getDataPerPage = () => {
    let dataAux = data;
    if (filter !== "") {
      dataAux = dataAux.filter(
        (row) =>
          JSON.stringify(row.id).includes(filter) ||
          row.company.toLowerCase().includes(filter) ||
          row.email.toLowerCase().includes(filter) ||
          row.phone.toLowerCase().includes(filter) ||
          row.type.toLowerCase().includes(filter)
      );
    }

    let agroupedData = [];

    do {
      agroupedData = [...agroupedData, [...dataAux.slice(0, 5)]];
      dataAux = dataAux.slice(5, dataAux.length);
    } while (dataAux.length > 0);

    return agroupedData;
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < getDataPerPage().length - 1) {
      setPage(page + 1);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerFilter(open);
  };

  return (
    <div>
      <div className="flex pt-5 pb-8 justify-between gap-20">
        <div className="flex w-full">
          <input
            placeholder="Busqueda de Ofertas"
            onChange={(e) => handleChange(e)}
            className="custom-input mr-10 w-full i-max-w-1"
          />

          <button onClick={() => setDrawerFilter(true)} className="btn btn-1 i-w-1" variant="contained">
            Filtrar
          </button>
        </div>
        <button className="btn btn-2 i-w-2">
          <img src={ExcelIcon} alt="" />
          Exportar
        </button>
      </div>
      <table className="table">
        <tr>
          <th className="text-xl">Empresa</th>
          <th className="text-xl">Correo electronico</th>
          <th className="text-xl">Teléfono</th>
          <th className="text-xl">Tipo de usuario</th>
          <th className="text-xl">Acciones</th>
        </tr>
        {getDataPerPage()[page].map((row) => (
          <tr>
            <td className="row-item text-base">{row.company}</td>
            <td className="row-item text-base">{row.email}</td>
            <td className="row-item text-base">{row.phone}</td>
            <td className="row-item text-base">{row.type}</td>
            <td>
              <button onClick={() => handleOpen(true)}>
                <VisibilityIcon />
              </button>
            </td>
          </tr>
        ))}
      </table>

      <Drawer anchor="right" open={drawerFilter} onClose={toggleDrawer(false)}>
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
      </Drawer>
      <Paginator page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} pageArray={getDataPerPage()} />

      {/*Area de Modales*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h1>asdsa</h1>
      </Modal>
    </div>
  );
};
