import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import { OfferDetails } from "../Drawers/OfferDetails";
import "./TransactionRows.scss";

export const TransactionRows = ({ data }) => {
  const [drawerFilter, setDrawerFilter] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerFilter(open);
  };

  return (
    <>
      <div onClick={() => setDrawerFilter(true)} className="cursor-pointer flex justify-between px-10 py-4 bg-gray-200 mb-6">
        <div>
          <p className="text-xl mb-2">{data.product}</p>
          <p className="text-base">{data.time}</p>
        </div>
        <div>
          <p className="color-gray-100 mb-2">
            <b>Empresa: </b>
            {data.company}
          </p>
          <p className="color-gray-100">
            <b>Cantidad: </b>
            {data.count}
          </p>
        </div>
        <div>
          <p className="color-gray-100 mb-2">
            <b>Días de entrega: </b>
            {data.delivery_day}
          </p>
          <p className="color-gray-100">
            <b>Pto. entrega: </b>
            {data.delivery_point}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold mb-2">{data.amount}</p>
          <p
            className={`${data.status === "Abierto" && "color-green-100"} ${
              data.status === "Vencido" && "color-red-100"
            } ${data.status === "Cerrado" && "color-gray-100"}`}
          >
            {data.status}
          </p>
        </div>
      </div>

      <Drawer anchor="right" open={drawerFilter} onClose={toggleDrawer(false)}>
        <OfferDetails toggleDrawer={toggleDrawer} data={data} />
      </Drawer>
    </>
  );
};
