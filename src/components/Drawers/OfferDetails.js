import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const OfferDetails = ({ data, toggleDrawer }) => {
  return (
    <div className="filter-form-container p-8 h-full relative flex flex-col">
      <div className="flex items-center gap-4 pb-5">
        <span onClick={() => toggleDrawer(false)}>
          <ArrowBackIcon />
        </span>
        <span className="text-2xl font-bold">Detalle de la oferta</span>
      </div>

      <div className="h-full">
        <div className="px-4 pb-4">
          <h4 className="font-bold">Información</h4>
          <p>000001</p>
        </div>

        <div className="square-green p-4">
          <div className="">
            <h4>Cantidad</h4>
            <p>3 Pipetas de gas</p>
          </div>
          <div className="">
            <h4>Precio</h4>
            <p>$ 25.00</p>
          </div>
        </div>

        <div className="p-4">
          <h4 className="font-bold">Punto de entrega</h4>
          <p>Calle 25 #34-52 Cartagena, Bolívar</p>
        </div>

        <div className="px-4 pb-4">
          <h4 className="font-bold">Día(s) de entrega</h4>
          <p>29/01/2021 - 10:00 am</p>
        </div>

        <div className="px-4 pb-4">
          <h4 className="font-bold">Modalidad contractual</h4>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="px-4 pb-4">
          <h4 className="font-bold">Condiciones de pago</h4>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        
        <div className="square-green p-4">
          <h4 className="font-bold">Vigencia de la oferta</h4>
          <p>29/01/2021 - 10:00 am</p>
        </div>
      </div>
    </div>
  );
};
