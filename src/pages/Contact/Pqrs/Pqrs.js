import React, { useState } from "react";

export const Pqrs = () => {
  const [filter, setFilter] = useState("");

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
      <div className="pt-2"></div>
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
