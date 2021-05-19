import React from "react";
import "./Users.scss";

import { Solicitudes } from "./Solicitudes/Solicitudes";
import { ClientesProveedores } from "./ClientesProveedores/ClientesProveedores";
import { Administradores } from "./Administradores/Administradores";

export const Users = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div>
      <div className="w-full">
        <ul className="tab-list flex gap-8">
          <li
            onClick={() => setTabValue(0)}
            className={`tab-item${tabValue === 0 && "-active"} cursor-pointer px-12 py-1 text-xl`}
          >
            Solicitudes
          </li>
          <li
            onClick={() => setTabValue(1)}
            className={`tab-item${tabValue === 1 && "-active"} px-12 cursor-pointer py-1 text-xl`}
          >
            Clientes/Proveedores
          </li>
          <li
            onClick={() => setTabValue(2)}
            className={`tab-item${tabValue === 2 && "-active"} px-12 cursor-pointer py-1 text-xl`}
          >
            Administradores
          </li>
        </ul>
        <div className="tab-content">{tabValue === 0 && <Solicitudes />}</div>
        <div className="tab-content">{tabValue === 1 && <ClientesProveedores />}</div>
        <div className="tab-content">{tabValue === 2 && <Administradores />}</div>
      </div>
    </div>
  );
};
