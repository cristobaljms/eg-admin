import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paginator } from "../../../components/Paginator/Paginator";
import { EditFaq } from "../../../components/Drawers/EditFaq";
import { Drawer } from "@material-ui/core";
import { CreateFaq } from "../../../components/Drawers/CreateFaq";
import Swal from "sweetalert2";

const Question = ({ row }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const setDrawerState = (state) => {
    console.log("state", state);
    setOpenEdit(state);
  };

  const deleteFaq = (question) => {
    Swal.fire({
      html:
        '<div class="w-full mt-10 mb-20 flex flex-col items-center">' +
        '<h2 class="text-1 mb-6 text-center">Eliminar pregunta frecuente</h2>' +
        '<p class="max-w-xs text-2 text-center mb-16">¿Esta seguro que desea eliminar esta pregunta frecuente de la lista?</p>' +
        `<div class="square-green p-6">${question}</div>` +
        "</div>",
      showCancelButton: true,
      focusConfirm: false,
    });
  };

  return (
    <div className="flex gap-1 items-center justify-center py-4">
      <button onClick={() => setOpenEdit(true)}>
        <CreateIcon />
      </button>
      <button onClick={() => deleteFaq(row.question)}>
        <DeleteIcon />
      </button>
      <Drawer anchor="right" open={openEdit} onClose={setOpenEdit}>
        <EditFaq data={row} toggleDrawer={setDrawerState} />
      </Drawer>
    </div>
  );
};

export const Faq = () => {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [openCreate, setOpenCreate] = useState(false);

  const getDataPerPage = () => {
    let dataAux = data;
    if (filter !== "") {
      dataAux = dataAux.filter(
        (row) =>
          JSON.stringify(row.id).includes(filter) ||
          row.question.toLowerCase().includes(filter) ||
          row.answer.toLowerCase().includes(filter)
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

  return (
    <>
      <div className="flex pt-5 pb-8 gap-10">
        <input placeholder="Busqueda" onChange={(e) => handleChange(e)} className="custom-input w-full i-max-w-1" />

        <button className="btn btn-1 i-w-1" variant="contained">
          Buscar
        </button>
      </div>
      <div className="pt-2">
        <table className="table">
          <tr>
            <th className="text-xl font-normal">Preguntas frecuentes</th>
            <th className="text-xl font-normal">Mensajes</th>
            <th className="text-xl font-normal">
              {" "}
              <button onClick={() => setOpenCreate(true)} className="btn btn-2 i-w-3">
                Agregar pregunta
              </button>
            </th>
          </tr>
          {getDataPerPage()[page].map((row) => (
            <tr>
              <td className="row-item text-base color-green-100">{row.question}</td>
              <td className="row-item text-base">{row.answer}</td>
              <td>
                <Question row={row} />
              </td>
            </tr>
          ))}
        </table>
        <Paginator page={page} setPage={setPage} prevPage={prevPage} nextPage={nextPage} pageArray={getDataPerPage()} />
        <Drawer anchor="right" open={openCreate} onClose={setOpenCreate}>
          <CreateFaq toggleDrawer={setOpenCreate} />
        </Drawer>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 2,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 3,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 4,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 5,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 6,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 7,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 8,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 9,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 10,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 11,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 12,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
  {
    id: 13,
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac pharetra quam, nec iaculis purus. Sed dapibus nisi aliquet, semper neque at, porttitor lacus. Vivamus in rhoncus eros. ",
  },
];
