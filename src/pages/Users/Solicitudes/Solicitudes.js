import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExcelIcon from "../../../assets/img/common/excel-icon.svg";
import { Drawer } from "@material-ui/core";
import { Paginator } from "../../../components/Paginator/Paginator";
import { FiltroSolicitudes } from "../../../components/Drawers/FiltroSolicitudes";
import { UsuarioAprobado } from "../../../components/Modales/UsuarioAprobado/UsuarioAprobado";
import "./Solicitudes.scss";


export const Solicitudes = () => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [drawerFilter, setDrawerFilter] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  /* Con esta funcion agrupamos la data en paginas */
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

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  /**
   * Funcion para abrir o cerrar el sidenav
   * @param {*} open true para abrir, false para cerrar
   */
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerFilter(open);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
              <button onClick={() => setDrawerFilter(true)}>
                <VisibilityIcon />
              </button>
            </td>
          </tr>
        ))}
      </table>

      <Paginator page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} pageArray={getDataPerPage()} />

      {/*Area de Drawers*/}
      <Drawer anchor="right" open={drawerFilter} onClose={toggleDrawer(false)}>
        <FiltroSolicitudes toggleDrawer={toggleDrawer} handleChange={handleChange} />
      </Drawer>

      {/*Area de Modales*/}
      <button onClick={() => openModal()}>Ver modal</button>
      <UsuarioAprobado modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

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
