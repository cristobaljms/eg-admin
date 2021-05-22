import React from "react";
import { Comprado } from "./Comprado/Comprado";
import "./Transactions.scss";
import { Vendido } from "./Vendido/Vendido";

export const Transactions = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div>
      {" "}
      <div className="w-full">
        <ul className="tab-list flex gap-8">
          <li
            onClick={() => setTabValue(0)}
            className={`tab-item${tabValue === 0 && "-active"} cursor-pointer px-12 py-1 text-xl`}
          >
            Comprado
          </li>
          <li
            onClick={() => setTabValue(1)}
            className={`tab-item${tabValue === 1 && "-active"} px-12 cursor-pointer py-1 text-xl`}
          >
            Vendido
          </li>
        </ul>
        <div className="tab-content">{tabValue === 0 && <Comprado />}</div>
        <div className="tab-content">{tabValue === 1 && <Vendido />}</div>
      </div>
    </div>
  );
};
