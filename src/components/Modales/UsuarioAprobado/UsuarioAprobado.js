import React from "react";
import image from "./../../../assets/img/users/127.svg";
import { ModalWrapper } from "../ModalWrapper";
import ArrowForward from "@material-ui/icons/ArrowForward";
import "./UsuarioAprobado.scss";

export const UsuarioAprobado = ({ modalIsOpen, closeModal }) => {
  return (
    <ModalWrapper modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className="w-96 mb-20 flex flex-col items-center">
        <img className="mb-14" src={image} alt=""/>
        <h2 className="text-1 mb-6">Aprobación exitosa</h2>
        <p className="text-2">El usuario se aprobó con éxito</p>
      </div>
      <div className="w-full">
        <button onClick={() => closeModal()}className="btn btn-1 w-auto float-right px-8 py-2">
          Volver a solicitudes
          <ArrowForward />
        </button>
      </div>
    </ModalWrapper>
  );
};
