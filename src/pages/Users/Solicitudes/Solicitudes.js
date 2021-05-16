import React, { useState } from "react";
import "./Solicitudes.scss";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ExcelIcon from "../../../assets/img/common/excel-icon.svg";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { Button, Drawer } from "@material-ui/core";

export const Solicitudes = () => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [drawerFilter, setDrawerFilter] = useState(false);

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
      <div className="flex pt-5 pb-8 justify-between gap-24">
        <div className="flex w-full">
          <input
            placeholder="Busqueda de Ofertas"
            onChange={(e) => handleChange(e)}
            className="custom-input mr-10 w-full"
          />
          <Button onClick={() => setDrawerFilter(true)} className="custom-bottom-1" variant="contained">
            Filtrar
          </Button>
        </div>
        <Button className="custom-bottom-2" variant="contained" startIcon={<img src={ExcelIcon} alt="" />}>
          Exportar
        </Button>
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

      <Drawer anchor="right" open={drawerFilter} onClose={toggleDrawer(false)}>
        <div className="filter-form-container p-9">
          <div className="flex items-center gap-4 pb-4">
            <ArrowBackIcon />
            <span className="text-2xl font-bold">Filtrar usuarios</span>
          </div>

          <form className="p-4">
            <div className="filter-header-title">
              <h4>Solicitudes</h4>
            </div>
            <input
              placeholder="Busqueda de Ofertas"
              onChange={(e) => handleChange(e)}
              className="custom-input mr-10 w-full"
            />
            <input
              placeholder="Busqueda de Ofertas"
              onChange={(e) => handleChange(e)}
              className="custom-input mr-10 w-full"
            />
            <input
              placeholder="Busqueda de Ofertas"
              onChange={(e) => handleChange(e)}
              className="custom-input mr-10 w-full"
            />
            <input
              placeholder="Busqueda de Ofertas"
              onChange={(e) => handleChange(e)}
              className="custom-input mr-10 w-full"
            />
          </form>
        </div>
      </Drawer>

      {getDataPerPage().length > 1 && (
        <ul className="pagination flex mx-auto justify-center gap-4 mt-6">
          <li
            className={page > 0 ? `page cursor-pointer` : `text-transparent`}
            onClick={() => {
              prevPage();
            }}
          >
            <ArrowLeftIcon />
          </li>

          {getDataPerPage().map((n, index) => (
            <li
              className={`page ${index === page && "page-active"} cursor-pointer`}
              onClick={() => setPage(index)}
              key={index}
            >
              {index + 1}
            </li>
          ))}

          <li
            className={page < getDataPerPage().length - 1 ? `page cursor-pointer` : `text-transparent`}
            onClick={() => {
              nextPage();
            }}
          >
            <ArrowRightIcon />
          </li>
        </ul>
      )}
    </div>
  );
};
