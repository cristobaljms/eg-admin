import React, { useState } from "react";
import { FiltrarTransacciones } from "../../../components/Modales/FiltrarTransacciones/FiltrarTransacciones";
import { TransactionRows } from "../../../components/TransctionRows/TransactionRows";

export const Vendido = () => {
  const [filter, setFilter] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex pt-5 pb-8 gap-10">
        <input placeholder="Busqueda" onChange={(e) => handleChange(e)} className="custom-input w-full i-max-w-1" />

        <button onClick={() => openModal()} className="btn btn-1 i-w-1" variant="contained">
          Filtrar
        </button>
      </div>

      <div className="header-underline-2 flex justify-between px-10 py-2">
        <h3>Recientes</h3>
        <h3 className="color-red-100 text-xl">$ 200.00</h3>
      </div>

      {data.map((row, i) => (
        <TransactionRows key={i} data={row} />
      ))}

      {/*Modal */}
      <FiltrarTransacciones modalIsOpen={modalIsOpen} closeModal={closeModal} setFilter={setFilter} />
    </>
  );
};

const data = [
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Abierto",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Cerrado",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Vencido",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Abierto",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Cerrado",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Vencido",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Abierto",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Cerrado",
  },
  {
    product: "Gas Natural",
    time: "12:56 pm",
    company: "Surtigas",
    count: 2,
    delivery_day: "29/01/2021",
    delivery_point: "Barranquilla",
    amount: "$ 100.00",
    status: "Vencido",
  },
];
