import React from "react";
import { DetailsUserLoged } from "../DetailsUserLoged/DetailsUserLoged";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar pb-1">
      <div className="bg-white px-24 h-full w-full flex items-center justify-between">
        <div className="font-bold text-2xl">Usuarios</div>
        <DetailsUserLoged />
      </div>
    </div>
  );
};
